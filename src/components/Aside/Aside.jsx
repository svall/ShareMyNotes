
import React from 'react';
import ReactDOM from 'react-dom'
import Aside from './Aside.css'


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
      <div className="asideContainer">

        {this.props.children}
      </div>
    )
  }
})
