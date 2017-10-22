import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { mangas } from './mangas';
import { user } from './user';

export default (graphqlClient) => {
    return combineReducers({
        routing: routerReducer,
        mangas,
        apollo: graphqlClient.reducer(),
        user
    });
};

