import { makeExecutableSchema } from 'graphql-tools';
import Manga from './models/manga';
import User from './models/user';
import resolvers from './resolvers/index';

let schema = null;

//mangas: id, name

const RootQuery =
`

type UserState {
  token: String
  user: String
  authenticated: Boolean
}
  type Query {
    mangas(name: String): [Manga]
    authenticate(user: String, password: String): UserState
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

schema = makeExecutableSchema({
    typeDefs: [SchemaDefinition,
               RootQuery,
               Manga,
               ...User
              ],
    resolvers: resolvers,
    // allowUndefinedInResolve :false, // optional
    // resolverValidationOptions: {}, // optional
});

export default schema;
