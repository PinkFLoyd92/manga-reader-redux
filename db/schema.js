import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';

let schema = null;
const mangas = [
    {id:0, name: 'bleach', path: 'tmp'},
    {id:1, name: 'boruto', path: 'tmp2'},
    {id:2, name: 'naruto', path: 'tmp3'}
];

const MangaType = new GraphQLObjectType({
    name: 'Manga',
    fields: () => ({
        id:{type: GraphQLInt},
        name:{type: GraphQLString},
        path:{type: GraphQLString}
    })
});

var rootQuery = new GraphQLObjectType({
    name: 'rootQueryType',
    fields: {
        manga:{
            type:MangaType,
            args: {
                id: {type:GraphQLInt}
            },
            resolve(parentValue, args){
                for(let i = 0; i < mangas.length; i++) {
                    if(mangas[i].id === args.id){
                        return mangas[i];
                    }
                }
            }
        }
    }
});

schema = new GraphQLSchema({
    query: rootQuery
});

export { schema };
