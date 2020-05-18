import blogSummary from '~/contents/summary.json';

export const blogs = getMetaData(blogSummary);
export const tags = getTags(blogSummary);
export const sourceFileArray = blogSummary.sourceFileArray;

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
  return blogArray.filter((post) => post.draft === false);
}

/**
 * @param {JSON} blogJSON blogs meta data
 * @return {Array} tags extracted from all blogs
 */
function getTags(blogJSON) {
  const tags = [];
  const blogs = getMetaData(blogJSON);
  blogs.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.push(tag));
    }
  });
  return tags.sort();
}
