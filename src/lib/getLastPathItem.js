import getRelativePath from './getRelativePath';

export default function getLastPathItem(sourceUrl) {
  const url = getRelativePath(sourceUrl);
  return url.split('/').pop();
}
