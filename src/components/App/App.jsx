import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import AppCss from './AppCss.css'
import Header from '../Header/Header'
import DisplayNoteContainer from '../DisplayNoteContainer/DisplayNoteContainer'
// import Aside from '../Aside/Aside'
import TopicList from '../TopicList/TopicList'

export default class App extends React.Component {
// export default React.createClass({
  constructor(props) {
    super();
    this.state = {
      topics: [],
    };
  }

  // getAllTopics() displays all Topics for the Cohort
  getAllTopics() {
    console.log('topics in app.jsx ', this.state.topics);
    fetch(`/api/cohort`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        topics: data
      });
      console.log('in app.jsx ', data);
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <container>
        <div role="nav">
          <Header />
        </div>
        <div className="appContainer">
          <TopicList
            getAllTopics={this.getAllTopics.bind(this)}
            topics={this.state.topics}
            /*<div><NavLink to="/topic">Topic List</NavLink></div>*/
            /*<li><Link to="/topicItem" activeStyle={{ color: 'red' }}>Topic Items</Link></li>*/
          />
          <DisplayNoteContainer
            /*<div><NavLink to="/oldNote">Saved Note</NavLink></div>*/
            /*<div><NavLink to="/newNote">New Note</NavLink></div>*/
          />
        </div>
        {this.props.children}
      </container>
    )
  }
}
