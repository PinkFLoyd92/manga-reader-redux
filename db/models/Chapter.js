import mongoose from 'mongoose';
import { mangaSchema } from './Manga';

var Schema = mongoose.Schema;

const chapterSchema = new Schema({
    _id     : Number,
    manga: mangaSchema,
    ch_name: String
}, {collection:'Chapter'});

// the schema is useless so far
// we need to create a model using it
const Chapter = mongoose.model('Chapter', chapterSchema);

export {
    Chapter, chapterSchema
};
