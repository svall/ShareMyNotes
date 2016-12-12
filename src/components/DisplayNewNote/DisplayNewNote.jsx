import React from 'react'
import ReactDOM from 'react-dom'
import DisplayNewNoteCss from './DisplayNewNoteCss.css'
import { Editor, EditorState, RichUtils, convertFromRaw, convertToRaw } from 'draft-js'

// export default React.createClass({
export default class DisplayNewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    // console.log(this.state.editorState)
  }

  onChange(editorState) {
    this.setState({
      editorState,
      editor_note: this.state.editorState.toJS().currentContent.blockMap
    });
    // console.log('on change ', this.state.editorState);
    // console.log('editor_note is: ', this.state.editor_note);
  }

  saveEditorNote(editor_note){
    this.props.saveNewNote(editor_note);
    console.log('editor_note is: ', editor_note);
  }

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
    const current = this.state.editorState.toJS();
    const editor_noteS = this.state.editor_note;
    // console.log('editorState full is === ', current);
    console.log('editorNOTE is === ', editor_noteS);
    // console.log('Current Content each block ==== ', current.currentContent.blockMap);
    // const arr = [];
    // arr.push(current.currentContent.blockMap)
    // console.log(arr)
    const raw = convertToRaw(this.state.editorState.getCurrentContent());
    // console.log(this.state.editorState.getCurrentContent());
    const jsonedRaw = JSON.stringify(raw);
    // console.log(this.state.editorState);
    // console.log(jsonedRaw);

    return(
      <div className="newNoteContainer">
        <h5 id="newNoteHeader">Display New Note</h5>
        {/*<h2>{this.props.params.repoName}</h2>*/}
        <div className="displayNewNoteContent">
          <button onClick={() => {this.makeBold();}}>B</button>
          <button onClick={() => {this.makeItalic();}}>I</button>
          <button onClick={() => {this.makeUnderline();}}>U</button>
          <div className="editorContainer" style={{ backgroundColor: 'white', width: '100%', height: '100%', border: '1px solid black' }}>
            <Editor
              className="editorBox"
              onChange={(editorState) => { this.onChange(editorState) }}
              editorState={this.state.editorState}

              // placeholder="This is the editor"
            />
          </div>
        </div>
        <div>
          {jsonedRaw}
        </div>
      </div>
    )
  }
}

