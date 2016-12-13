import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import NoteSnippetListCss from './NoteSnippetListCss.css'
import NoteSnippetItem from '../NoteSnippetItem/NoteSnippetItem'

class NoteSnippetList extends React.Component {
// export default class NoteSnippetList extends React.Component {
// export default React.createClass({
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
        // onClick={() => this.props.selectNote(notes.note_id)}
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
          // {console.log('in noteSnippetList ', this.props.notes)}
        // {this.props.children}

export default NoteSnippetList;
