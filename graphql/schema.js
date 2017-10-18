import { makeExecutableSchema } from 'graphql-tools';
import Manga from './models/manga';
import resolvers from './resolvers/index';

let schema = null;

//mangas: id, name

const RootQuery =
`
  type Query {
    mangas(name: String): [Manga]
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

schema = makeExecutableSchema({
    typeDefs: [SchemaDefinition, RootQuery, Manga],
    resolvers: resolvers,
    // allowUndefinedInResolve :false, // optional
    // resolverValidationOptions: {}, // optional
});

export default schema;
