import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import * as actions from './actions/tasks';
var store = require('configureStore').configure();

store.dispatch(actions.startAddTasks())
// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
);
