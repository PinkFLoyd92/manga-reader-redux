import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { mangas } from './mangas';

export default combineReducers({
    routing: routerReducer,
    mangas,
});
