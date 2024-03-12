import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About1 from './Components/About1'
import Project from './Components/project'
import Skills from './Components/Skills'
import Contact from './Components/Contact'


function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About1/>
      <Project/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
