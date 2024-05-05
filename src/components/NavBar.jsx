import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/"><li>home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/about"><li>Aboput </li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/login"><li>login</li></NavLink>
      </nav>
    </div>
  )
}

export default NavBar
