import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

export default class App extends React.Component{

  render(){
    return(
      <container>
        <h1>My Notes!!!!</h1>
          <ul role="nav">
            <li><Link to="/topic">Topic List</Link></li>
            <li><Link to="/topicItem">Topic Items</Link></li>
          </ul>
          {this.props.children}
      </container>
    )
  }
}
