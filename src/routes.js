import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './containers/Home';
if(process.env.WEBPACK) require('typeface-roboto');

export default (
	<Route path='/'>
		<IndexRoute component={Home} />
		{/* <Route path='mangas' component={MangaGrid} /> */}
	</Route>
);
