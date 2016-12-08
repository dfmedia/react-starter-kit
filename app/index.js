import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

/**
 * Import the global Ant Design styles
 * @todo: probably only import the styles per-component as we use them,
 * but this is fine to get up and running
 */
import 'antd/dist/antd.css';

/**
 * Create the Redux store
 */
import configureStore from './state';
import App from './containers/App';
import Articles from './containers/Articles';
import Settings from './containers/Settings';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

/**
 * Render the app
 */
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="articles" component={Articles} />
        <Route path="settings" component={Settings} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
