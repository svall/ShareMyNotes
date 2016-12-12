import React from 'react'
import ReactDOM from 'react-dom'
import DisplaySavedNote from './DisplaySavedNote.css'


export default React.createClass({
  // getNoteContent() {
  //   fetch(`/api/cohort/notes/${this.props.selected_note}`)
  //     .then(r => r.json())
  //     .then((data) => {
  //       this.setState({
  //         selected_note_content: data[0].id,
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  // showNote(note) {
  //   // console.log('topic in toplicList ', topics[0]);
  //         // key={index}
  //         // onClick={() => this.props.getTopicNotes(index)}
  //         // content={topic.note[0].text}
  //         // cohort={topic.cohort_id}
  //   return selected_note_object.map((note, index) =>
  //     <p>{note.note[0].text}
  //     </p>
  //   )
  // }

  render() {
    return(
      <div className="savedNoteContainer">
        <h5>Display Saved Note</h5>
        <div className="displaySavedNoteContent">
          <h3>{this.props.selected_note}</h3>
          <p>Title: {this.props.selected_note_object.title}</p>
          <p>Topic: {this.props.selected_note_object.topic_name}</p>
        </div>
      </div>
    )
  }
    // {this.props.selected_note_object.title}
    // <p>{this.props.selected_note_content}</p>
})

