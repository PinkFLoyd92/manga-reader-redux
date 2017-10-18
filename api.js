import express from 'express';
import cors from 'cors';
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
const mangas = require('./api/manga');
const mongoose = require('mongoose');
let schema = null;

mongoose.connect('mongodb://localhost:27017/mangadb');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    const schema = require('./graphql/schema');
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
