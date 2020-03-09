export default function getRelativeURLPath(url) {
  let relativeURL = '';
  const absolute = process.env.REACT_APP_GRAPHQL_ROOT_URL;

  relativeURL = url.replace(absolute, '');
  relativeURL = relativeURL.replace(/\/$/, ''); // Strip last forward slash in the URL path

  if (relativeURL === '') {
    relativeURL = '/';
  }

  return relativeURL;
}
