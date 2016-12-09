import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
// import NavLink from '../NavLink/NavLink'
import DisplayNoteContainer from './DisplayNoteContainer.css'

export default React.createClass({
  render() {
    return(
      <div className="noteContainerDisplay">
        <h2>Display Note Container</h2>
        {this.props.children}
      </div>
    )
  }
})
