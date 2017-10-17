import { makeExecutableSchema } from 'graphql-tools';
import Manga from './models/manga';

module.exports = (db) => {
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
    return schema;
}

