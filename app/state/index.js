/**
 * External Dependencies
 */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ApolloClient, { createNetworkInterface } from  'apollo-client';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

/**
 * Create the ApolloClient
 * @type {ApolloClient}
 */
export const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://denverpost.dev/graphql'})
});

/**
 * State reducers
 *
 * These reducers make up the subtrees of the Rexux store
 */
import articles from './reducers/articles';
import settings from './reducers/settings';

/**
 * Combine all our reducers into one rootReducer
 * This creates all the subtrees within the state tree, where
 * each subtree has it's own reducers
 */
const rootReducer = combineReducers({
  articles,
  settings,
  apollo: client.reducer(),
  routing: routerReducer,
});

/**
 * Create the logger middleware
 */
const loggerMiddleware = createLogger();

/**
 * This configures the store, and applies thunk and logger middlewares
 * Additionally, this sets up support for the devToolsExtension
 */
export function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, loggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));
}
