import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var mangaSchema = new Schema({
    _id : Number,
    name: String,
    path: String
}, {collection:'Manga'});

// the schema is useless so far
// we need to create a model using it
const Manga = mongoose.model('Manga', mangaSchema);

export { Manga, mangaSchema };


// create a schema

// Select an item from Manga collection
// Manga.find({name:"bleach"},(err,res)=>{
// 	if (err){console.log("---Bleach not found in Manga" + err)}
// 	else console.log("+++Manga fetched ==> " + res)
// })	
