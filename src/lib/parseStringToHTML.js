import parseString from 'html-react-parser';

export default function parseStringToHTML(stringVariable) {
  return parseString(`${stringVariable}`);
}
