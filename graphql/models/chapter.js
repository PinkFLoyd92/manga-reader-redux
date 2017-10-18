import Manga from 'manga';
// the path is obtained by concating the manga path and this chapter ch_name
const Chapter =
      `
type Chapter {
  id: Int!
  manga: Manga!
  ch_name: String!
}
`;

export default () => [Manga, Chapter];

