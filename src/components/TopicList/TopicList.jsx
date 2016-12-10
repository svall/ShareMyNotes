import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import TopicListCss from './TopicListCss.css'
import TopicListItem from '../TopicListItem/TopicListItem'


// export default React.createClass({
export default class TopicList extends React.Component {

  showTopics(topics) {
    return topics.map((topic, index) =>

        <TopicListItem
          key={index}
          name={topic.name}
          cohort={topic.cohort_id}
        />

    )
  }

  componentWillMount() {
    this.props.getAllTopics();
  }

  render() {
    return(
      <div className="topicListDiv">
        <h2>Topic List</h2>
        <div>
          {this.showTopics(this.props.topics)}
        </div>
      </div>
    )
  }
}

       // {<TopicListItem />}

        // {this.props.children}
