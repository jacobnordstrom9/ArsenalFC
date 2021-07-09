import React from 'react'
import { Link, Button } from 'react-router-dom'
import FrontPage from '../FrontPage'

const Sidebar = () => {
  return (
    <>
    <div className="background">
      <div className="mainWrapper">
        <div className="left-side">
            <Link to="/">Home</Link> <br/>
            <Link to="/table">League Table</Link><br/>
            <Link to="/roster">Roster</Link><br/>
            <Link to="/schedule">Schedule</Link><br/>
        </div>
        <div className="right-side">
        <div className="right-side-header"> 
            <div className="right-side-header-left">
              
            </div>
            <div className="right-side-header-center">
              
            </div>
            <div className="right-side-header-right">
              <img src="arsenalLogo.png"></img>
            </div>
        </div>
        <div className="mainContent">
          
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
