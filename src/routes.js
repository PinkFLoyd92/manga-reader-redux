import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import Home from './containers/Home';
import MangaManager from './containers/MangaManager';
import Login from './containers/Login';
import App from './containers/App';
import MangaItem from './containers/MangaItem';
import {requireAuthentication} from './containers/AuthenticatedComponent';

if(process.env.WEBPACK) require('typeface-roboto');

export default (
    <Route path='/' component={App}>
        <Route path="login" component={Login}/> 
        <Route path="dash" component={ MangaManager } />
        <Route path='mangas/(:name)' component={requireAuthentication(MangaItem)} /> 
    </Route>
);
