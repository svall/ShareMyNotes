'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App/App.jsx';
import CohortLogin from './components/CohortLogin/CohortLogin.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={CohortLogin} />
    <Route path="/dashboard" component={App} />
  </Router>
  ), document.querySelector('#container'));
