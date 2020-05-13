import blogInfo from '~/contents/summary.json';

export const posts = getMetaInfo(blogInfo);
export const tags = getTags();

/**
 * convert YYYY-MM-DD -> YYYY/MM/DD
 * @param {String} dateString
 */
function convertDataString(dateString) {
  if (!dateString) return false;
  return dateString.split('-').join('/');
}
/**
 * get meta data from JSON named summary.json
 * @param {JSON} blogJSON JSON object containing blogs meta data
 * @return {Array} array containing each blog meta data without draft===true
 */
function getMetaInfo(blogJSON) {
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
 * @return {Array} - tags extracted from all posts
 */
function getTags() {
  const tags = [];
  const posts = getMetaInfo(blogInfo);
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.push(tag));
    }
  });
  return tags.sort();
}
