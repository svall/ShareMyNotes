import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Header.css'

export default React.createClass({
  render() {
    return(
      <div className="headerContainer">
        <h1 id="appHeader">DIAMONDS COHORT - DASHBOARD</h1>
        {this.props.children}
      </div>
    )
  }
})
