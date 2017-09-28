import express from 'express';
import cors from 'cors';
const bodyParser = require('body-parser');
const mangas = require('./api/manga');


const Api = express();

Api.use(cors());
Api.use(bodyParser.json());
Api.use('/api', mangas);

Api.listen(4000, '0.0.0.0', (err) => {
    if(err) {
        console.error('API:', err);
    } else {
        console.info('API RUNNING AT PORT: 4000');
    }
});
