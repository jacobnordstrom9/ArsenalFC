import React from 'react'
import { Link } from 'react-router-dom'


const BaseLayout = (props) => {
  return (
    <>
    <ul>
      <li>
        <Link to="/">Home</Link> <br/>
      </li>
      <li>
        <Link to="/hooks">Hooks</Link>
      </li>
      <li>
        <Link to="/class">Class</Link>
      </li>
    </ul>
    <br/><br/>
      {props.children}
    <br/><br/>
    </>
  )
}

export default BaseLayout