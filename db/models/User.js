import mongoose from 'mongoose';
import { mangaSchema } from './Manga';

var Schema = mongoose.Schema;

const userSchema = new Schema({
    _id     : Number,
    mangas: [mangaSchema],
    user: String,
    password: String
}, {collection:'User'});

// the schema is useless so far
// we need to create a model using it
const User = mongoose.model('User', userSchema);

export {
    User, userSchema
};
