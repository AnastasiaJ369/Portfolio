import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'


const App = () => {
  return (
    <div className='w-full relative bg-black flex justify-center items-center'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
