import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Particles from './components/particles.jsx'
import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'

const App = () => {
  return (
    <div className='w-full h-screen relative bg-black flex justify-center items-center'>
      <Navbar />
      <Header />

      <section id="Home" className=""></section>
      <section id="About" className=""></section>
      <section id="Projects" className=""></section>
      <section id="Contact" className=""></section>

     <div style={{ width: '100%', height: '100vh', position: 'relative' }}> 
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
    </div>
  )
}

export default App
