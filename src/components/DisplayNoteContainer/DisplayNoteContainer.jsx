import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
// import NavLink from '../NavLink/NavLink'
import DisplayNoteContainer from './DisplayNoteContainer.css'
import DisplayNewNote from '../DisplayNewNote/DisplayNewNote'
import DisplaySavedNote from '../DisplaySavedNote/DisplaySavedNote'


export default React.createClass({
  render() {
    return(
      <div className="noteContainerDisplay">
        <h2>Display Note Container</h2>
        <div className="savedNewNoteContainer">
          <DisplaySavedNote />
          <DisplayNewNote />
        </div>
      </div>
    )
  }
})
        // {this.props.children}
