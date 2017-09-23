var express = require('express');
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
    console.info('SENDING MANGAS DIRECTORIES');
    res.send(mangas);
});

module.exports = router
