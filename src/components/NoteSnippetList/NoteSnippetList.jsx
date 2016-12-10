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
        name={notes.title}
      />
    )
  }

  render() {
    return(
      <div className="noteListDiv">
        <h2>Note Snippet List</h2>
        <div>
          {this.showNotes(this.props.notes)}

        </div>
      </div>
    )
  }
}
        // {this.props.children}

export default NoteSnippetList;
