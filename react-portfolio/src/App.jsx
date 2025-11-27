import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Particles from './components/particles.jsx'
import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'



const App = () => {
  return (
    <div className='min-w-screen min-h-screen relative bg-black'>
      <Navbar />
      
      {/* Fixed particles background for entire page */}
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 0 }}> 
        <Particles
          particleColors={['#4adbdeff', '#0e72deff']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
