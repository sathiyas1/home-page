import React from 'react'
import '../assets/Navbar.css'
import {Link}from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div><ul>
        <li><Link to ='/'>Home</Link></li>
        <li><b><Link to ='/about'>About</Link></b></li>
        <li><b><Link to = '/Contact'>Contact</Link></b></li>
        <li><b><Link to = '/Blog'>Gallery</Link></b></li>
        <li><b><Link to = '/UseEffect'>UseEffect</Link></b></li>
        <li><b><Link to = '/UseRef'>UseRef</Link></b></li>
        <li><b><Link to = '/UseMemo'>UseMemo</Link></b></li>
        </ul>
        <hr/>
        </div>
  )
}
export default Navbar2