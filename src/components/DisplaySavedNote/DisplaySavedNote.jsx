import React from 'react'
import ReactDOM from 'react-dom'
import DisplaySavedNoteCss from './DisplaySavedNoteCss.css'
import { Editor, EditorState, RichUtils, convertFromRaw, Entity, convertToRaw, ContentState, DefaultDraftBlockRenderMap, Modifier } from 'draft-js'

export default class DisplaySavedNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      // contentState: ContentState,
      // new_note_id: 0
      // title: 'None'
    };
    console.log(this.state.editorState)
  }

  onChange(editorState) {
    this.setState({
      editorState,
      // editor_note: this.state.editorState.toJS().currentContent.blockMap,
      // editor_note: this.state.editorState
    });
    // console.log('basic editorState: ', this.state.editorState.toJS().currentContent.blockMap);
    console.log('basic editorState: ', this.state.editorState);

    // console.log('editor_note is: ', this.state.editor_note);
  }

  getEditorNote(e){
    // this.props.saveNewNote(editor_note);
    // console.log('clicked save note');
    // console.log('clicked SAVE note: ', this.state.editor_note);
    // const thisFROMraw = convertFROMRaw(this.state.editorState.getCurrentContent());
    // const toJSData = this.state.editorState.toJS();
    fetch(`/api/cohort/notes/${this.props.selected_note}`)
      .then(r => r.json())
      .then((data) => {
        const thisFROMraw = data;
        // this.setState({
        //   editorState: data.toJS()
        // })
      console.log('fetch editor ', data)
      const translated = (thisFROMraw);
      console.log('converted from ', translated)
      })
      .catch(err => console.log(err));
// //           // console.log('selected_note_content ', this.props.selected_note_content)
// //         savedNoteArr.push(data);
// //         console.log('data from note fetch ', savedNoteArr)
// //         savedContent.push(Object.values(data)[2]);
// //         console.log('data digged Values!!!=> ', savedContent[0]);
// //         // console.log('title??? ', savedNoteArr[0].title)
// //         objKeys.push(Object.keys(data));
// //         console.log('keys!!! ', objKeys);

//     // .then(this.getAllGardens())
    // console.log('clicked SAVE note: ', this.state.editorState)
  }

  render() {

    // const toJSData = this.state.editorState.toJS();
    // const newJS = JSON.stringify(toJSData);
    // console.log('toJS() editorState full is === ', newJS);

    // const thisraw = convertToRaw(this.state.editorState.getCurrentContent());
    // console.log('TO raw conversion ', thisraw);

    // const fromRaw = convertFromRaw(this.state.editorState.getCurrentContent());
    // console.log('FROM raw conversion ', fromRaw);

    // const jsObject = JSON.parse(newJS);
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
        <button onClick={this.getEditorNote.bind(this)}>GET!</button>
        <h5 id="newNoteHeader">Display New Note</h5>
        <h5 id="newNoteTopic">Id: {this.props.selected_note}</h5>
        {/*<h2>{this.props.params.repoName}</h2>*/}
        <div className="displayNewNoteContent">

          <div className="editorContainer" style={{ backgroundColor: 'white', width: '100%', height: '100%', border: '1px solid black', overloadY: 'scroll' }}>
            <Editor
              className="editorBox"
              onChange={(editorState) => { this.onChange(editorState) }}
              editorState={this.state.editorState}
              // placeholder="Type notes here..."
            />
          </div>
        </div>
        <div>
          {/*jsonedRaw*/}
        </div>
      </div>
    )
  }
}


// ======================================
// export default React.createClass({
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

  // getNoteContent() {
    // fetch(`/api/cohort/notes/12`)
    //   .then(r => r.json())
    //   .then((data) => {
    //     // this.setState({
    //     //   selected_note_content: data,
    //     // });
    //   console.log('data from note fetch ', data)

    //   })
    //   .catch(err => console.log(err));
  // }
  // render() {
  //   const savedNoteArr = [];
  //   const savedContent = [];
  //   const objKeys = [];
  //   const objValues = [];
  //   // const noteID = parseInt(document.getElementById('noteID').textContent);
  //   // console.log('id is ', noteID);
  //   function getNoteContent() {
  //     console.log('entered click to fetch');
  //       fetch(`/api/cohort/notes/5`)
  //         .then(r => r.json())
  //         .then((data) => {
  //           // this.setState({
  //           //   selected_note_content: data,
  //           // });
  //           // console.log('selected_note_content ', this.props.selected_note_content)
  //         savedNoteArr.push(data);
  //         console.log('data from note fetch ', savedNoteArr)
  //         savedContent.push(Object.values(data)[2]);
  //         console.log('data digged Values!!!=> ', savedContent[0]);
  //         // console.log('title??? ', savedNoteArr[0].title)
  //         objKeys.push(Object.keys(data));
  //         console.log('keys!!! ', objKeys);

  //         })
  //         .catch(err => console.log(err));
  //     }

  //   function mappingObject() {

  //   }
  //   return(
  //     <div className="savedNoteContainer">
  //       <h5>Display Saved Note</h5>
  //       <div className="displaySavedNoteContent">
  //         <h3 id="noteID">{this.props.selected_note}</h3>
  //         <p>Hi</p>
  //       </div>
  //       <button onClick={getNoteContent}>GET!</button>
  //     </div>
  //   )
  // }
          // <h3>{this.savedNoteArr[0].title}</h3>
          // <p>{this.props.notes[this.props.selected_note]}</p>
          // <p>Topic: {this.props.selected_note_object.topic_name}</p>
          // <p>Title: {this.props.selected_note_object.title}</p>
    // {this.props.selected_note_object.title}
    // <p>{this.props.selected_note_content}</p>
// })

