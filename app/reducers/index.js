// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import mangas from './manga';
import select from './selection';

const rootReducer = combineReducers({
  mangas,
  selectedManga: select,
  router,
});

export default rootReducer;
