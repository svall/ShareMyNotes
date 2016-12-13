import React from 'react'
import ReactDOM from 'react-dom'
import NoteSnippetItemCss from './NoteSnippetItemCss.css'


  function clicker(e) {
    let bttns = document.querySelectorAll('.noteButtons');
    // bttns.addEventListener('click', (console.log('event working')));
    // console.log(bttns);
    // onClick(console.log("clicked!!!"));
  }


class NoteSnippetItem extends React.Component {

  render() {
    // console.log('in NoteSnippetItem ', this.props.title)
    return(
      <div className="noteSnippet">
        <p
          className="snippetTitle"
          id={this.props.note_id}
          value={this.props.note_id}
          onClick={(e) => this.props.selectNote(e)}
          // onMouseDown={'style={{ backgroundColor: 'red'}}'}
          >{this.props.index} - {this.props.title}
        </p>

        {/*<button
          className="noteButtons"
          // id={this.props.key}
          type="button"
          value={this.props.title}
          onClick={clicker()}>
          {this.props.title}
        </button>*/}
      </div>
    )
  }
}

// const NoteSnippetItem = props => (
// export default React.createClass({
//   render() {
//     return(
//       <div className="noteSnippet">
//         <h5>Note Name: {this.props.title}</h5>
//         <button type="submit" value={this.props.title}>{this.props.title}</button>
//       </div>
//     )
//   }
// })

export default NoteSnippetItem;

// export default TopicListItem;
