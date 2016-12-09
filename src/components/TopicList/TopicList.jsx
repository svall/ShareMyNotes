import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import TopicList from './TopicList.css'

export default React.createClass({
  render() {
    return(
      <div className="topicListDiv">
        <h2>Topic List</h2>
        <ul>
          {/*<li><NavLink to="/topic/topicName">Rails</NavLink></li>
          <li><NavLink to="/topic/topicName">Ruby</NavLink></li>
          <li><NavLink to="/topic/topicName">Javascript</NavLink></li>
          <li><NavLink to="/topic/topicName">Mongo</NavLink></li>
          <li><NavLink to="/topic/topicName">SQL</NavLink></li>
        */}
        </ul>
        {this.props.children}
      </div>
    )
  }
})
