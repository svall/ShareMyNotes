import React from 'react';
import ReactDOM from 'react-dom';
import DisplaySavedNoteCss from './DisplaySavedNoteCss.css';
import { Editor, EditorState, RichUtils, convertFromRaw, Entity, convertToRaw, ContentState, DefaultDraftBlockRenderMap, Modifier } from 'draft-js';

const divStyle = {
  color: 'red',
  fontWeight: 'bold',
  fontSize: '20px',
};

// attribution rendering code in Draft.js format (convertFromRaw()): https://www.npmjs.com/package/draft-js-editor,
// http://stackoverflow.com/questions/36499858/draft-js-persist-editorcontent-to-database
export default class DisplaySavedNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: ''
    };
    console.log(this.state.editorState)
  }

  // onChange() updates the state when there are changes to the editor component
  onChange(editorState) {
    this.setState({
      editorState,
    });
    console.log('basic editorState: ', this.state.editorState);
    console.log('basic GetCurrentContent: ', this.state.editorState.getCurrentContent());
  }

  // getEditorNote() does a fetch to the notes table in the database for the id of the note selected
  // function executes on click of the "SHOW NOTE" button, it renders in the Draft.js editor format
  getEditorNote(e){
    fetch(`/api/cohort/notes/${this.props.selected_note}`)
      .then(r => r.json())
      .then((data) => {
        const contentState = convertFromRaw(data.content);
        this.setState({
          editorState: EditorState.createWithContent(contentState),
          title: data.title
        })
      console.log('fetch editor ', data)
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="savedNoteContainer">
        <h5 id="savedNoteHeader">Display Existing Note</h5><hr />
        <div className="savedWrapper">
          <label className="newNoteTitle">Note selected: # <div id="styleDiv" style={divStyle}>{this.props.selected_note}</div></label>
        </div>
        <div className="titleButtonSaved">
          <button className="displayNoteButton" onClick={this.getEditorNote.bind(this)}>SHOW NOTE</button><br /><br />
          <label className="newNoteTitle" id="savedNoteTitle">Title: {this.state.title}</label><br /><br />
        </div>
        <div className="displaySavedNoteContent">
          <div className="editorContainer" style={{ backgroundImage: 'url("http://a.rgbimg.com/cache1uLiVQ/users/x/xy/xymonau/300/o8aZlNs.jpg")', width: '99.2%', border: '1px solid rgba(0, 0, 0, 0.5)' }}>
            <Editor
              className="editorBox"
              onChange={(editorState) => { this.onChange(editorState) }}
              editorState={this.state.editorState}
            />
          </div>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

