import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App/App.jsx';
import TopicList from './components/TopicList/TopicList';
import TopicListItem from './components/TopicListItem/TopicListItem.jsx';
// import './components/favicon.ico';


// mount our App at #container
render((
  // <App />, document.querySelector('#container'));
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/*<Route path="/topic" component={TopicList}>*/}
      {/*<Route path="/topicItem" component={TopicListItem} />*/}
      {/*  <Route path="/topic/:topicName" component={TopicListItem} />
      </Route>*/}
    </Route>
  </Router>
  ), document.querySelector('#container'));
