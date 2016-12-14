import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import TopicListCss from './TopicListCss.css'
import TopicListItem from '../TopicListItem/TopicListItem'

// export default React.createClass({
export default class TopicList extends React.Component {

  showTopics(topics) {
    // console.log('topic in toplicList ', topics[0]);
    return topics.map((topic, index) =>
      <button className="buttonTopics" key={index} onClick={() => this.props.getTopicNotes(index)}>
        <TopicListItem
          // key={index}
          // onClick={() => this.props.getTopicNotes(index)}
          id={topic.id}
          name={topic.name}
          cohort={topic.cohort_id}
        />
      </button>
    )
  }

  componentWillMount() {
    this.props.getAllTopics();
  }

  render() {
    return(
      <div className="topicListDiv">
        <h3 className="topicHeader">TOPICS</h3>
        <div className="topicContainer">
          {this.showTopics(this.props.topics)}
        </div>
      </div>
    )
  }
}

       // {<TopicListItem />}

        // {this.props.children}
