import blogSummary from '~/contents/summary.json';

export const posts = getMetaData(blogSummary);
export const tags = getTags(blogSummary);
export const sourceFileArray = blogSummary.sourceFileArray;

/**
 * convert YYYY-MM-DD -> YYYY/MM/DD
 * @param {String} dateString
 * @return {String} YYYY/MM/DD
 */
function convertDataString(dateString) {
  return dateString ? dateString.split('-').join('/') : '';
}

/**
 * return meta data from JSON
 * @param {JSON} blogJSON JSON object containing blogs meta data
 * @return {Array} array containing each blog meta data without draft===true
 */
function getMetaData(blogJSON) {
  const blogDirPatternArray = blogJSON.sourceFileArray.map(
    (str) => str.slice(2, -3) + '.json'
  );
  const blogArray = blogDirPatternArray.map(
    (pattern) => blogJSON.fileMap[pattern]
  );
  blogArray.forEach((post) => {
    post.publishedAt = convertDataString(post.publishedAt);
    post.updatedAt = convertDataString(post.updatedAt);
  });
  return blogArray.filter((post) => post.draft === false);
}

/**
 * @param {JSON} blogJSON blogs meta data
 * @return {Array} tags extracted from all posts
 */
function getTags(blogJSON) {
  const tags = [];
  const posts = getMetaData(blogJSON);
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.push(tag));
    }
  });
  return tags.sort();
}
