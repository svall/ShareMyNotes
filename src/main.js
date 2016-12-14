'use strict'
import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App/App.jsx';
import CohortLogin from './components/CohortLogin/CohortLogin.jsx'
// import TopicList from './components/TopicList/TopicList';
// import TopicListItem from './components/TopicListItem/TopicListItem.jsx';

// import './components/favicon.ico';


// mount our App at #container
render((
  // <App />, document.querySelector('#container'));
  <Router history={browserHistory}>
    <Route path="/login" component={CohortLogin} />
    <Route path="/" component={App} />
  </Router>
  ), document.querySelector('#container'));
