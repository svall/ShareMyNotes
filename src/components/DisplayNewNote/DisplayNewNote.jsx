import React from 'react'
import ReactDOM from 'react-dom'
import DisplayNewNoteCss from './DisplayNewNoteCss.css'
import { Editor, EditorState, RichUtils, convertFromRaw, Entity, convertToRaw, ContentState, DefaultDraftBlockRenderMap, Modifier } from 'draft-js'
import type {RawDraftContentBlock} from 'RawDraftContentBlock';
import type {RawDraftEntity} from 'RawDraftEntity';

// export type RawDraftContentState = {
//   blocks: Array<RawDraftContentBlock>,
//   entityMap: {[key: string]: RawDraftEntity},
// };
const divStyle = {
  color: 'red',
  fontWeight: 'bold',
};

// export default React.createClass({
export default class DisplayNewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      // contentState: ContentState,
      // new_note_id: 0
      title: 'None'
    };
    // console.log(this.state.editorState)
  }

  onChange(editorState) {
    this.setState({
      editorState,
      // editor_note: this.state.editorState.toJS().currentContent.blockMap,
      // editor_note: this.state.editorState
    });
    // console.log('basic editorState: ', this.state.editorState);
    // console.log('editor_note is: ', this.state.editor_note);
  }

  addTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  saveEditorNote(e){
    // this.props.saveNewNote(editor_note);
    // console.log('clicked save note');
    // console.log('clicked SAVE note: ', this.state.editor_note);
    const thisraw = convertToRaw(this.state.editorState.getCurrentContent());
    // const toJSData = this.state.editorState.toJS();
    fetch(`/api/cohort/newnote`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        content: thisraw,
        // content: this.state.editorState.toJS(),
        topic_id: this.props.topic_id,
        title: this.state.title
      })
    })
    .then(this.setState({
        // editorState: EditorState.createEmpty(),
    }))
    // .then(this.getAllGardens())
    // .throw(alert('no id!'))
    .catch((err) => {
      console.log(err);
    });
    // console.log('clicked SAVE note: ', this.state.editorState)
  }




  // ========= TEXT STYLING BUTTONS ==========
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



  render() {
    const toJSData = this.state.editorState.toJS();
    const newJS = JSON.stringify(toJSData);
    // console.log('toJS() editorState full is === ', newJS);

    // const thisraw = convertToRaw(this.state.editorState.getCurrentContent());
    // console.log('TO raw conversion ', thisraw);

    // const fromRaw = convertFromRaw(this.state.editorState.getCurrentContent());
    // console.log('FROM raw conversion ', fromRaw);

    const jsObject = JSON.parse(newJS);
    // console.log('jsObject ', jsObject);
    // const contentState = new ContentState(jsObject);

    // console.log('content state ', contentState);
    // console.log('contentState ', contentState);

    // const toRawData = this.state.editorState.convertToRaw();
    // console.log('toRAW() editorState full is === ', toRawData);

    // const editor_noteS = this.state.editor_note;
    // console.log('editorNOTE is === ', editor_noteS);
    // console.log('Current Content each block ==== ', current.currentContent.blockMap);
    // const arr = [];
    // arr.push(current.currentContent.blockMap)
    // console.log(arr)
    // const raw = convertToRaw(this.state.editorState.getCurrentContent());
    // console.log(this.state.editorState.getCurrentContent());
    // const jsonedRaw = JSON.stringify(raw);
    // console.log(this.state.editorState);
    // console.log(jsonedRaw);

    return(
      <div className="newNoteContainer">
        {/*<button onClick={this.props.saveEditorNote.bind(this)}>SAVE!</button>*/}
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
        {/*<h2>{this.props.params.repoName}</h2>*/}
        <div className="stylebuttons">
          <button onClick={() => {this.makeBold();}}>B</button>
          <button onClick={() => {this.makeItalic();}}>I</button>
          <button onClick={() => {this.makeUnderline();}}>U</button>
        </div>
        <div className="displayNewNoteContent">
          <div className="editorContainer" style={{ backgroundColor: 'rgb(254,250,180)', width: '99.2%', border: '1px solid rgba(0, 0, 0, 0.5)' }}>
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

