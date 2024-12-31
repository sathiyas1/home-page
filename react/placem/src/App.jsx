import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/NavBar'
import Navbar2 from './component/Navbar2'
import Footer from './component/Footer.jsx'
import Home from './component/Home.jsx'
import Contact from './component/Contact.jsx'
import Blog from './component/Blog.jsx'
import Login from './component/Login.jsx'
import About from './component/About.jsx'
import UseEffect from './component/UseEffect.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Navbar2/>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/UseEffect" element={<UseEffect/>}/>
      </Routes>
      </BrowserRouter>


    
  )
}

export default App