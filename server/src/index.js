let express = require('express');

let app = module.exports = express();

// Faux database

let mangas = [
    { name: 'shingeki no kyojin' , description: "test3", completed: false}
    , { name: 'dragon ball' , description: "test2", completed: false}
    , { name: 'durarara' , description: "test", completed: false}
];


/**
 * GET index.
 */

app.get('/', function(req, res){
    console.log("sending resource...");
    console.info(req);
res.contentType('application/json');
res.send(JSON.stringify(mangas));
});


if (!module.parent) {
  app.listen(8080);
  console.log('Express started on port 8080');
}
