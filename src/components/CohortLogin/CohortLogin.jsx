import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import CohortLoginCss from './CohortLoginCss.css'

export default class CohortLogin extends React.Component {
 render(){
    return (
      <div>
        <h1>Cohort Login</h1>
        <h3>Enter Cohort Name</h3>
        <a href="/dashboard">Dashboard</a>
        {/*<form>
          <input type="text" placeholder="enter cohort" />
          <input type="text" placeholder="enter password" />
          <button type="submit">LOGIN</button>
        </form>*/}
      </div>
    )
  }
}
