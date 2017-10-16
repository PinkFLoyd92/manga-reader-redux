import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} from 'graphql';

const MongoClient = require('mongodb').MongoClient;
let schema = null;

//mangas: id, name

const connection = new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost:27017/mangadb', function (err, db) {
        if (err) reject(err);

        const ChapterType = new GraphQLObjectType({
            name: 'Manga',
            fields: () => ({
                id:{type: GraphQLID},
                id_manga:{type: GraphQLID},
                number:{type: GraphQLString},
                path:{type: GraphQLString}
            })
        });

        const MangaType = new GraphQLObjectType({
            name: 'Manga',
            fields: () => ({
                id:{type: GraphQLID},
                name:{type: GraphQLString},
                path:{type: GraphQLString}
            })
        });


        const UserType = new GraphQLObjectType({
            name: 'User',
            fields: () => ({
                id:{type: GraphQLID},
                mangas:{type: new GraphQLList(MangaType)},
                name:{type: GraphQLString},
                password:{type: GraphQLString}
            }),
        });


        var userQuery = new GraphQLObjectType({
            name: 'query',
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
