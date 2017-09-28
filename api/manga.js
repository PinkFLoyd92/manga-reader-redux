var express = require('express');
var fs = require('fs');
import { fetchImage } from '../helpers/helpers';

var config;
fs.readFile('./config/config.json', 'utf8', function (err, data) {
    if (err) throw err;
    config = JSON.parse(data);
});
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.info('Time: ', Date.now());
    next();
});

router.get('/mangas', function (req, res) {
    const mapMangaDir = new Map();
    let directories = [];
    fs.readdir(config.directory, (err, files) => {
        directories = files;
        directories.forEach((dir) => {
            let logo = '';
            let imagedata = '';
            try {
                logo = fetchImage(dir,`${config.directory}/${dir}`);
                imagedata = new Buffer(logo).toString('base64');  
            } catch(e) {
                console.error('Exception..., could not find the image');
            }
            mapMangaDir.set(dir, {
                directory: `${config.directory}/${dir}`,
                logo: imagedata,
            });
        });
        res.send(mapMangaDir);
    });
});

module.exports = router;
