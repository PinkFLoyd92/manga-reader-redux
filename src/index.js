import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';
import routes from './routes';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

const client = axios.create({
    baseURL:'http://localhost:4000/api',
    options: { responseType: 'json',
        headers: { 'Access-Control-Allow-Origin': 'localhost:4000'}
    }
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(axiosMiddleware(client)));

const store = createStore(reducers, enhancer);
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			{ routes }
		</Router>
	</Provider>,
	document.getElementById('app')
);

if(process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers').default);
    });
}
