import React from 'react'
import ReactDOM from 'react-dom'
import NoteSnippetItemCss from './NoteSnippetItemCss.css'

class NoteSnippetItem extends React.Component {

  render() {
    return(
      <div className="noteSnippet">
        <p
          className="snippetTitle"
          id={this.props.note_id}
          value={this.props.note_id}
          onClick={(e) => this.props.selectNote(e)}
          >#{this.props.note_id} - {this.props.title}
        </p>
      </div>
    )
  }
}

export default NoteSnippetItem;


