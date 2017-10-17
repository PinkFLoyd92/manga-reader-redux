import { makeExecutableSchema } from 'graphql-tools';
import Manga from './models/manga';

const MongoClient = require('mongodb').MongoClient;
let schema = null;

//mangas: id, name

const connection = new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost:27017/mangadb', function (err, db) {
        if (err) reject(err);


        var userQuery = new GraphQLObjectType({
            name: 'rootQuery',
            fields: {
                authenticate:{
                    type:UserType,
                    args: {
                        name: {type:GraphQLString},
                        password: {type:GraphQLString}
                    },
                    resolve(parentValue, args){
                        db.collection('users').find().toArray(function (err, result) {
                            if (err) throw err;
                            return(result);
                        });
                
                    }
                }
            }
        });

        schema = new GraphQLSchema({
            query: userQuery
        });
        resolve(schema);
    });
});
export { connection }; // After handling the promise we take the schema
