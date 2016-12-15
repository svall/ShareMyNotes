import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import AppCss from './AppCss.css'
import Header from '../Header/Header'
import TopicList from '../TopicList/TopicList'
import DisplayNewNote from '../DisplayNewNote/DisplayNewNote'
import DisplaySavedNote from '../DisplaySavedNote/DisplaySavedNote'
import NoteSnippetList from '../NoteSnippetList/NoteSnippetList'

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      topics: [],
      topic_id: '',
      selected_topic: '',
      notes: [],
      note_id: '',
      selected_note: 0,
    };
  }

  // getTopicNotes() displays the notes associated to a selected topic, saves them in notes state
  getTopicNotes(topicID) {
    this.setState({
      selected_topic: this.state.topics[topicID],
      topic_id: this.state.topics[topicID].id,
    });
    fetch(`/api/cohort/${this.state.topics[topicID].id}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        notes: data,
      });
    })
    .catch(err => console.log(err));
  }

  // getAllTopics() displays all Topics for the Cohort, saves them in topics state array
  // the function fires on componentWillMount in the TopicList component
  getAllTopics() {
    fetch(`/api/cohort`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        topics: data
      });
    })
    .catch(err => console.log(err));
  }

  // selectNote() will change the state of the note the user clicks on. The click event is in
  // the NoteSnippetItem component
  selectNote(e) {
    let selectedNote = Number.parseInt(e.target.id);
    this.setState({
      selected_note: selectedNote,
    });
  }

  render(){
    return(
      <container>
        <link href="https://fonts.googleapis.com/css?family=Enriqueta|Reenie+Beanie|Shadows+Into+Light+Two" rel="stylesheet"></link>
        <div role="nav">
          <Header />
        </div>
        <div className="appContainer">
          <div className="asideContainer">
            <TopicList
              topics={this.state.topics}
              getAllTopics={this.getAllTopics.bind(this)}
              getTopicNotes={this.getTopicNotes.bind(this)}
            />
            <NoteSnippetList
              topics={this.state.topics}
              topic_id={this.state.topic_id}
              notes={this.state.notes}
              note_id={this.state.note_id}
              selected_note={this.state.selected_note}
              selectNote={(event) => this.selectNote(event)}
            />
          </div>
          <div className="savedNewNoteContainer">
            <DisplaySavedNote
              notes={this.state.notes}
              note_id={this.state.note_id}
              selected_note={this.state.selected_note}
            />
            <DisplayNewNote
              topic_id={this.state.topic_id}
              topics={this.state.topics}
            />
          </div>
        </div>
        {/*this.props.children*/}
      </container>
    )
  }
}

