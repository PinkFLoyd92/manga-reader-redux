var express = require('express');
var fs = require('fs');
var config;
fs.readFile('./config/config.json', 'utf8', function (err, data) {
    if (err) throw err;
    config = JSON.parse(data);
});
var router = express.Router();
import mangas from './delete/directories';

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.info('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/mangas', function (req, res) {
    const mapMangaDir = new Map();
    let directories = [];
    fs.readdir(config.directory, (err, files) => {
        directories = files;
        directories.forEach((dir) => {
            mapMangaDir.set(dir,`${config.directory}/${dir}`);
        });
        res.send(mapMangaDir);
    });
});

module.exports = router;
