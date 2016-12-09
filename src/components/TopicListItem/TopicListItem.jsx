import React from 'react'
import ReactDOM from 'react-dom'
import TopicListItem from './TopicListItem.css'

export default React.createClass({
  render() {
    return(
      <div>
      {this.props.params.topicName}
        <h5>Notes1</h5>
        <h5>Notes2</h5>
        <h5>Notes3</h5>
      </div>
    )
  }
})
