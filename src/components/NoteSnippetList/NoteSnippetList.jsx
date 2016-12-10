import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import NoteSnippetList from './NoteSnippetList.css'
import NoteSnippetItem from '../NoteSnippetItem/NoteSnippetItem'

export default React.createClass({
  render() {
    return(
      <div className="noteListDiv">
        <h2>Note Snippet List</h2>
        <div>
          <NoteSnippetItem />
          {/*<NavLink to="/topic/topicName"><button>Rails</button></NavLink>
          <NavLink to="/topic/topicName"><button>Ruby</button></NavLink>
          <NavLink to="/topic/topicName"><button>Javascript</button></NavLink>
          */}
        </div>
      </div>
    )
  }
})
        // {this.props.children}
