import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import NoteSnippetListCss from './NoteSnippetListCss.css'
import NoteSnippetItem from '../NoteSnippetItem/NoteSnippetItem'

class NoteSnippetList extends React.Component {
  // showNotes() maps throught the notes state array, passes the data to the NoteSnippetItem component
  showNotes(notes) {
    return this.props.notes.map((notes, key) =>
      <NoteSnippetItem
        key={key}
        index={key + 1}
        title={notes.title}
        note_id={notes.note_id}
        notes={this.props.notes}
        selected_note={this.props.selected_note}
        selectNote={this.props.selectNote}
      />
    )
  }

  render() {
    return(
      <div className="noteListDiv">
        <h3>NOTES</h3>
        <div className="allNotesContainer">
          {this.showNotes(this.props.notes)}
        </div>
      </div>
    )
  }
}

export default NoteSnippetList;
