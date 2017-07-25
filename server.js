import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';
import cors from 'cors';

const app = express();
const Api = express();

if(process.env.NODE_ENV === 'development') {
    const config = require('./webpack.config.dev');
    const compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    }));
    app.use(require('webpack-hot-middleware')(compiler));
    app.use(express.static(path.resolve(__dirname, 'src')));
} else if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
}

app.get('*', middleware);
const mangas = require('./api/manga')
Api.use(cors())
Api.use('/api', mangas)

Api.listen(4000, '0.0.0.0', (err) => {
    if(err) {
        console.error('API:', err);
    } else {
        console.info('API RUNNING AT PORT: 4000');
    }
});
app.listen(3000, '0.0.0.0', (err) => {
    if(err) {
        console.error(err);
    } else {
        console.info('Listening at http://localhost:3000');	
    }
});
