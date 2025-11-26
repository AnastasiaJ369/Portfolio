import React from 'react'
import Header from './components/header.jsx'
import Particles from './components/particles.jsx'

const Home = () => {
  return (
    <section id="Home" className='w-full h-screen relative flex justify-center items-center'>
      <Header />
      <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 0 }}> 
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
    </section>
  )
}

export default Home