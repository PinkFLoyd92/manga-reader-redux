import express from 'express';
import cors from 'cors';
const MongoClient = require('mongodb').MongoClient;
let schema = null;
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const mangas = require('./api/manga');

    MongoClient.connect('mongodb://localhost:27017/mangadb', function (err, db) {
        if (err) reject(err);
        const schema = require('./db/schema')(db);
        // console.info('Checking schema Info', schema);
        const Api = express();

    Api.use(cors());
    Api.use(bodyParser.json());
    Api.use('/api', mangas);

    Api.use('/graphql', new graphqlHTTP({
        schema: schema,
        graphiql: true
    }));

    Api.listen(4000, '0.0.0.0', (err) => {
        if(err) {
            console.error('API:', err);
        } else {
            console.info('API RUNNING AT PORT: 4000');
        }
    // });

    }); //mongo
});
