import React from 'react'
import Navbar from './navbar.jsx'

const About = () => {
  return (
     <section id="About" className='pt-20'>
      <Navbar />
        <div className='text-4xl font-bold mx-8 mb-4 shadow-xl shadow-cyan-500/50'>
            <div className='text-white'>
            About Me
            </div>
            <div className='text-lg mt-4 text-white'>
              Hello! I'm Anastasia, a passionate web developer with a love for creating beautiful 
              and functional websites. With a strong foundation in HTML, CSS, and JavaScript, I 
              enjoy bringing ideas to life in the digital world. When I'm not coding, you can find
               me exploring new technologies, reading tech blogs, or hiking in nature.
            </div>
        </div>
     </section>
  )
}

export default About