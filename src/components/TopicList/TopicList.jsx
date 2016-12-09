import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import TopicList from './TopicList.css'
import TopicListItem from '../TopicListItem/TopicListItem'

export default React.createClass({
  render() {
    return(
      <div className="topicListDiv">
        <h2>Topic List</h2>
        <div>
          <TopicListItem />
          {/*<NavLink to="/topic/topicName"><button>Rails</button></NavLink>
          <NavLink to="/topic/topicName"><button>Ruby</button></NavLink>
          <NavLink to="/topic/topicName"><button>Javascript</button></NavLink>
          */}
        </div>
      </div>
    )
  }
})
        // {this.props.children}
