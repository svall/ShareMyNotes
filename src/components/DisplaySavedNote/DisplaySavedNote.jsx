import React from 'react'
import ReactDOM from 'react-dom'
import DisplaySavedNote from './DisplaySavedNote.css'



export default React.createClass({
        // <h3>{this.props.selected_note_content.title}</h3>
        // <p>{this.props.selected_note_content.note}</p>

  render() {
    return(
      <div className="savedNoteContainer">
        <h5>Display Saved Note</h5>
        <div className="displaySavedNoteContent">
          <h3>{this.props.selected_note} + {this.props.selected_note_content.title}</h3>
          <p>{this.props.selected_note_content.note}</p>
        </div>


      </div>
    )
  }
})

