import React from 'react'
import ReactDOM from 'react-dom'
import NoteSnippetItemCss from './NoteSnippetItemCss.css'


class NoteSnippetItem extends React.Component {
  render() {
    console.log('in NoteSnippetItem ', this.props.title)
    return(
      <div className="noteSnippet">
        <button type="submit" value={this.props.title}>{this.props.title}</button>
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
