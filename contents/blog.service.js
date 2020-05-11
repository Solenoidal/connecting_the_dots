import blogInfo from '~/contents/summary.json';

export const posts = getMetaInfo(blogInfo);

function getMetaInfo(blogObject) {
  const patterns = blogObject.sourceFileArray.map(
    (str) => str.slice(2, -3) + '.json'
  );
  return patterns
    .map((pattern) => blogObject.fileMap[pattern])
    .filter((post) => post.draft === false);
}
