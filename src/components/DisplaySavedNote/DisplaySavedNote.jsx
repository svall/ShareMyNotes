import React from 'react'
import ReactDOM from 'react-dom'
import DisplaySavedNote from './DisplaySavedNote.css'

// function getNoteContent() {
//   console.log('entered click to fetch');
//   const savedNoteArr = [];
//   const savedContent = [];
//     fetch(`/api/cohort/notes/12`)
//       .then(r => r.json())
//       .then((data) => {
//         // this.props.setState({
//         //   selected_note_content: data,
//         // });
//       savedNoteArr.push(data);
//       console.log('data from note fetch ', savedNoteArr)
//       savedContent.push(Object.values(data)[2]);
//       console.log('data digged => ', savedContent[0]);
//       console.log('title??? ', savedNoteArr[0].title)
//       })
//       .catch(err => console.log(err));
//   }

export default React.createClass({
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
  render() {
    const savedNoteArr = [];
    const savedContent = [];
    const objKeys = [];
    const objValues = [];

    function getNoteContent() {
      console.log('entered click to fetch');
        fetch(`/api/cohort/notes/12`)
          .then(r => r.json())
          .then((data) => {
            // this.setState({
            //   selected_note_content: data,
            // });
            // console.log('selected_note_content ', this.props.selected_note_content)
          savedNoteArr.push(data);
          console.log('data from note fetch ', savedNoteArr)
          savedContent.push(Object.values(data)[2]);
          console.log('data digged Values!!!=> ', savedContent[0]);
          // console.log('title??? ', savedNoteArr[0].title)
          objKeys.push(Object.keys(data));
          console.log('keys!!! ', objKeys);

          })
          .catch(err => console.log(err));
      }

    function mappingObject() {

    }
    return(
      <div className="savedNoteContainer">
        <h5>Display Saved Note</h5>
        <div className="displaySavedNoteContent">
          <h3>{this.props.selected_note}</h3>
          <p>Hi</p>
        </div>
        <button onClick={getNoteContent}>GET!</button>
      </div>
    )
  }
          // <h3>{this.savedNoteArr[0].title}</h3>
          // <p>{this.props.notes[this.props.selected_note]}</p>
          // <p>Topic: {this.props.selected_note_object.topic_name}</p>
          // <p>Title: {this.props.selected_note_object.title}</p>
    // {this.props.selected_note_object.title}
    // <p>{this.props.selected_note_content}</p>
})

