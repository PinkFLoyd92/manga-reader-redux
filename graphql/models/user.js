import Manga from 'manga';

// the path is obtained by concating the manga path and this chapter ch_name
const User =
`
type User {
  id: Int!
  mangas: [Manga]
  user: String!
  password: String!
}
`;
export default () => [User, Manga];
