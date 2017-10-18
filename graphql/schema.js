import { makeExecutableSchema } from 'graphql-tools';
import Manga from './models/manga';

let schema = null;

//mangas: id, name

    const RootQuery =
              `
  type RootQuery {
    hello: String
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

schema = makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQuery, Manga],
    resolvers:{}
});

export default schema;
