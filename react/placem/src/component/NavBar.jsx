import React, { useState } from 'react'
import '../assets/Nav.css'
const Navbar = () => {
  var sky={
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '2rem',
    padding: '10px'
  }
  var[count,set]=useState(0)
  return (
    <header>
      <h1 style={sky}></h1>
      <h2 class='Box-model'>Durai singam</h2>
      <h5 id='text'>Increment or Decrement the number </h5>
      <h2>Count  {count}</h2>
      <button onClick={()=>set(count+1)}>Increase</button>
      <button onClick={()=>set(count-1)}>Decrease</button>
      <button onClick={()=>set(count==0)}>Reset</button>
    </header>
  )
}
export default Navbar