import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import NavLink from '../NavLink/NavLink'
import CohortLoginCss from './CohortLoginCss.css'

export default class CohortLogin extends React.Component {
 render(){
    return (
      <div>
        <div className="containerCohort">
          <h1 className="headerCohort">SHARE MY NOTES</h1>
          <h3 className="subheaderCohort">Click on the button to enter the dashboard for your cohort</h3>
          <button className="dashboardButton"><a className="dashboardLink" href="/dashboard">Diamoinds Dashboard</a></button>
          {/*<form>
            <input type="text" placeholder="enter cohort" />
            <input type="text" placeholder="enter password" />
            <button type="submit">LOGIN</button>
          </form>*/}
        </div>
      </div>
    )
  }
}
