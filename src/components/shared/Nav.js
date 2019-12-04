import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/questions'>Questions</NavLink>
    <NavLink to='/create-question'>Create Question</NavLink>
  </nav>
)

export default Nav
