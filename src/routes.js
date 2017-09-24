import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './containers/Home';
import App from './containers/App';
import MangaItem from './containers/MangaItem';
if(process.env.WEBPACK) require('typeface-roboto');

export default (
	<Route path='/' component={App}>
		<Route path='home' component={Home} />
		<Route path='mangas/(:name)' component={MangaItem} />
	</Route>
);
