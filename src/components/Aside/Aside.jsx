
import React from 'react';
import ReactDOM from 'react-dom'
import Aside from './Aside.css'
import TopicList from '../TopicList/TopicList'



export default React.createClass({
  render() {
    return(
      <div className="asideContainer">
        <TopicList />
      </div>
    )
  }
})

