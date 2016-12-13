import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Header.css'


// export default() {
// render() {
//     return(
//       <div>Header</div>
//     )
//   }
// }

export default React.createClass({
  render() {
    return(
      <div className="headerContainer">
        <h1 id="appHeader">DIAMONDS COHORT</h1>
        {this.props.children}
      </div>
    )
  }
})
