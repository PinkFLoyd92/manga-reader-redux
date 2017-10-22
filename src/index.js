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
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

let graphqlClient = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:4000/graphql'
    }),
});
export const client = axios.create({
    baseURL:'http://localhost:4000/api',
    options: { responseType: 'json',
        headers: { 'Access-Control-Allow-Origin': 'localhost:4000'}
    }
});

export const gClient = axios.create({
    baseURL:'http://localhost:4000/graphql',
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
    applyMiddleware(axiosMiddleware(client), graphqlClient.middleware()));

let initialState = {
    mangas: [], 
    // authentication
    token: null,
    user: {
        name: '',
        password: ''
    },
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null,
    graphqlClient
};

const finalReducers = reducers(graphqlClient);
const store = createStore(finalReducers, initialState, enhancer);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <ApolloProvider store={store} client={graphqlClient}>
        <Router history={history}>
            { routes }
        </Router>
    </ApolloProvider>,
    document.getElementById('app')
);

if(process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
        store.replaceReducer(require('./reducers').default);
    });
}
