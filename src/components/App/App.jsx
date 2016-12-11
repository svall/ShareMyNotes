import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import AppCss from './AppCss.css'
import Header from '../Header/Header'
// import DisplayNoteContainer from '../DisplayNoteContainer/DisplayNoteContainer'
import TopicList from '../TopicList/TopicList'
import DisplayNewNote from '../DisplayNewNote/DisplayNewNote'
import DisplaySavedNote from '../DisplaySavedNote/DisplaySavedNote'
import NoteSnippetList from '../NoteSnippetList/NoteSnippetList'

export default class App extends React.Component {
// export default React.createClass({
  constructor(props) {
    super();
    this.state = {
      topics: [],
      topic_id: '',
      selected_topic: '',
      notes: [],
      note_id: '',
      selected_note: 0
    };
  }

  // getTopicNotes() displays the notes associated to a selected topic
  getTopicNotes(topicID) {
    this.setState({
      selected_topic: this.state.topics[topicID],
      topic_id: this.state.topics[topicID].id,
    });
    console.log('in app.jsx topic id ', this.state.topics[topicID].id);
    fetch(`/api/cohort/${this.state.topics[topicID].id}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        notes: data,
        // note_id: data[0].note_id
      });
    })
    .catch(err => console.log(err));
    console.log('in app.jsx selected topic:', this.state.selected_topic);
    console.log('in app.jsx selected topic id:', this.state.topic_id);
    console.log('in app.jsx notes:', this.state.notes);
    // console.log('in app.jsx note id:', this.state.note_id);
  }
  // getAllTopics() displays all Topics for the Cohort
  getAllTopics() {
    // console.log('topics in app.jsx ', this.state.topics);
    fetch(`/api/cohort`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        topics: data
      });
      console.log('in app.jsx all data ==== ', data);
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
          <div className="asideContainer">
            <TopicList
              getAllTopics={this.getAllTopics.bind(this)}
              topics={this.state.topics}
              getTopicNotes={this.getTopicNotes.bind(this)}
              /*<div><NavLink to="/topic">Topic List</NavLink></div>*/
              /*<li><Link to="/topicItem" activeStyle={{ color: 'red' }}>Topic Items</Link></li>*/
            />
            <NoteSnippetList
              topics={this.state.topics}
              topic_id={this.state.topic_id}
              notes={this.state.notes}
              note_id={this.state.note_id}
              selected_note={this.state.selected_note}
            />
          </div>
          <div className="savedNewNoteContainer">
            <DisplaySavedNote
              notes={this.state.notes}
              note_id={this.state.note_id}
              selected_note={this.state.selected_note}
            />
            <DisplayNewNote />
          </div>
        </div>
        {this.props.children}
      </container>
    )
  }
}
          // <DisplayNoteContainer
            /*<div><NavLink to="/oldNote">Saved Note</NavLink></div>*/
            /*<div><NavLink to="/newNote">New Note</NavLink></div>*/
          // />
