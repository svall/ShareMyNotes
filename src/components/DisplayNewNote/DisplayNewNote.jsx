import React from 'react'
import ReactDOM from 'react-dom'
import DisplayNewNoteCss from './DisplayNewNoteCss.css'
import { Editor, EditorState, RichUtils, convertFromRaw, Entity, convertToRaw, ContentState, DefaultDraftBlockRenderMap, Modifier } from 'draft-js'

const divStyle = {
  color: 'red',
  fontWeight: 'bold',
  fontSize: '20px',
};

// attribution Draft.js Rich Text Editor setup: "draftjs-tutorial" (jbasdf) - https://github.com/atomicjolt/draftjs-tutorial,
// data format to save to pqsl: http://stackoverflow.com/questions/36499858/draft-js-persist-editorcontent-to-database
export default class DisplayNewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: 'None'
    };
  }

  // onChange() updates the state when there are changes to the editor component
  onChange(editorState) {
    this.setState({
      editorState,
    });
  }

  // addTitle() changes the "title" state when the user types in the title input box
  addTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  // saveEditorNote() does a POST to the notes table in the database
  // function executes on click of the "SAVE NOTE" button
  saveEditorNote(e){
    const thisraw = convertToRaw(this.state.editorState.getCurrentContent());
    fetch(`/api/cohort/newnote`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        content: thisraw,
        topic_id: this.props.topic_id,
        title: this.state.title
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // ========= INLINE TEXT STYLING FUNCTIONS ==========
  // makeBold(),  makeItalic(), makeUnderline(), makeStrikeThrough(), change the
  // styling of the editor state for the content selected
  makeBold() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }

  makeItalic() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'ITALIC'
    ));
  }

  makeUnderline() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'UNDERLINE'
    ));
  }

  makeStrikeThrough() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'STRIKETHROUGH'
    ));
  }

  render() {
    // console.log EditorState:
    const toJSData = this.state.editorState.toJS();
    console.log('EditorState ==> ', toJSData);
    // console.log EditorState Raw:
    const rawJS = JSON.stringify(toJSData);
    console.log('EditorState Raw ==> ', rawJS);
    // console.log ContentState:
    const contentSt = convertToRaw(this.state.editorState.getCurrentContent());
    console.log('ContentState ==> ', contentSt);

    return(
      <div className="newNoteContainer">
        <h5 id="newNoteHeader">Create New Note</h5><hr />
        <div className="wrapperHeaderNewNote">
          <form>
            <label className="newNoteTopic">Title:
              <input id="titleInput" type="text" name="title" placeholder="Enter Note Title" onChange={this.addTitle.bind(this)}/>
            </label><br />
            <label className="newNoteTopic" id="topicIdSave">Topic{/*(select Topic buttons):*/}: # <div id="styleDiv" style={divStyle}>{this.props.topic_id}</div></label><br />
            <div id="buttonDiv">
              <button className="saveButton" onClick={this.saveEditorNote.bind(this)}>SAVE NOTE</button>
            </div>
          </form>
        </div>
        <div className="stylebuttons">
          <button onClick={() => {this.makeItalic();}}><i>I</i></button>
          <button onClick={() => {this.makeUnderline();}}><u>U</u></button>
          <button onClick={() => {this.makeBold();}}><b>B</b></button>
          <button onClick={() => {this.makeStrikeThrough();}}><em>-</em></button>
        </div>
        <div className="displayNewNoteContent">
          <div className="editorContainer" style={{ fontFamily: 'calibri', backgroundImage: 'url("http://savin-it.com/images/2016/02/09/texture-lines-stripes-field-notebook-notebook-yellow-leaf-page-background-lignes-rayure-carnet-jaune-feuille-page.th.jpg")', width: '99.2%', border: '1px solid rgba(0, 0, 0, 0.5)' }}>
            <Editor
              className="editorBox"
              onChange={(editorState) => { this.onChange(editorState) }}
              editorState={this.state.editorState}
              placeholder='Start typing here...'
            />
          </div>
        </div>
        <div>
        {/*{jsonedRaw}*/}
        </div>
      </div>
    )
  }
}

