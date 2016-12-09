import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import App from './App.css'
import Header from '../Header/Header'
import DisplayNoteContainer from '../DisplayNoteContainer/DisplayNoteContainer'
import Aside from '../Aside/Aside'

export default React.createClass({

  render(){
    return(
      <container>
          <div role="nav">
            <Header />
          </div>
        <div className="appContainer">
            <Aside>
              <div><NavLink to="/topic">Topic List</NavLink></div>
              {/*<li><Link to="/topicItem" activeStyle={{ color: 'red' }}>Topic Items</Link></li>*/}
            </Aside>
            <DisplayNoteContainer>
              <div><NavLink to="/oldNote">Saved Note</NavLink></div>
              <div><NavLink to="/newNote">New Note</NavLink></div>
            </DisplayNoteContainer>
        </div>
          {this.props.children}
      </container>
    )
  }
})
