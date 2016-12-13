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
      selected_note: 0,
      selected_note_object: {test: "test"},
      selected_note_content: [],

      editor_note: {},
      editor_save_note: [],
    };

    // this.filterNote = this.filterNote.bind(this);
  }

  // getTopicNotes() displays the notes associated to a selected topic
  getTopicNotes(topicID) {
    this.setState({
      selected_topic: this.state.topics[topicID],
      topic_id: this.state.topics[topicID].id,
    });
    // console.log('in app.jsx topic id ', this.state.topics[topicID].id);
    fetch(`/api/cohort/${this.state.topics[topicID].id}`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        notes: data,
        // note_id: data[0].note_id
      });
    })
    .catch(err => console.log(err));
    // console.log('in app.jsx selected topic:', this.state.selected_topic);
    // console.log('in app.jsx selected topic id:', this.state.topic_id);
    // console.log('in app.jsx notes:', this.state.notes);
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
      // console.log('in app.jsx all data ==== ', data);
    })
    .catch(err => console.log(err));
  }

  getNoteData(collection) {
    // return collection.map((note, index) =>
    //   )
  }

  // getNoteContent() {
  //   let notesTimer = setTimeout(function() {
  //     const objValues = Object.values(this.state.selected_note_object)[4];
  //     // console.log('in app.jsx selectedNoteId/// ', Object.values(this.state.selected_note_object)[4]);
  //     const noteInObj = Object.values(objValues)[0];
  //     // console.log('obj in obj ', noteInObj);
  //     this.setState({
  //       selected_note_content: noteInObj
  //     })
  //     console.log('selected_note_content ==== ', this.state.selected_note_content);

  //   }, 1000);
  // }

  filterNote(x) {
    // console.log('topic in toplicList ', topics[0]);
          // key={index}
          // onClick={() => this.props.getTopicNotes(index)}
          // content={topic.note[0].text}
          // cohort={topic.cohort_id}
    // const noteContent = x;
    // console.log('noteContent ', noteContent)
    // console.log('note content ', noteContent.title);
    // console.log('keys! ', Object.keys(noteContent));
  }

  selectNote(e) {
    let selectedNote = Number.parseInt(e.target.id);
    // console.log('testing target select note id: ', selectedNote);

    this.setState({
      selected_note: selectedNote,
      // selected_note_object: this.state.notes[selectedNote - 1],
    });
    // console.log('selected note is ==> ', this.state.selected_note_object);
    // console.log('note ID is ==> ', this.state.note_id);
    // console.log('notes array ', this.state.notes[selectedNote - 1])
    // console.log('selected notes num ', this.state.selected_note)
    // const objValues = Object.values(this.state.selected_note_object)[4];
    // // console.log('in app.jsx selectedNoteId/// ', Object.values(this.state.selected_note_object)[4]);
    // const noteInObj = Object.values(objValues)[0];
    // // console.log('obj in obj ', noteInObj);

    // this.setState({
    //   selected_note_content: noteInObj
    // })
    // console.log('selected_note_content ==== ', this.state.selected_note_content);
    // getNoteContent();
    // this.filterNote(this.state.selected_note_object);
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
              selected_note_object={this.state.selected_note_object}
              selected_note_content={this.state.selected_note_content}
              // getNoteContent={this.getNoteContent.bind(this)}
            />
            <DisplayNewNote
              editor_note={this.state.editor_note}
              topic_id={this.state.topic_id}
              topics={this.state.topics}
              // saveEditorNote={this.saveEditorNote.bind(this)}
            />
          </div>
        </div>
        {this.props.children}
      </container>
    )
  }
}

