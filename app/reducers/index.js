// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import mangas from './manga';

const rootReducer = combineReducers({
  mangas,
  router,
});

export default rootReducer;
