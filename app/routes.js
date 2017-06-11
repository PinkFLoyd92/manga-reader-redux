/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import MangaSearch from './containers/MangaSearch';
import MangaInfo from './containers/MangaInfo';

export default () => (
  <App>
    <Switch>
      <Route path="/Info" component={MangaInfo} />
      <Route path="/" component={MangaSearch} />
    </Switch>
  </App>
);
