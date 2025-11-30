import React from 'react'
import Navbar from './navbar.jsx'


const About = () => {
  return (
     <section id="About" className='pt-20'>
      <Navbar />
        <div className='text-4xl font-bold mx-8 mb-4 shadow-xl shadow-cyan-500/50'>
            <div className='about-title text-white mt-8'>
            About Me
            </div>
            <div className='about-subtext text-white mt-8 text-md text-3xl leading-loose'>
              Hello! I'm Anastasia, a budding software developer from Daytona Beach, Florida. I'm 
              currently pursuing an A.S. degree in Computer Analysis and Programming with the
              expectation of pursuing a B.S. in Information Technology. With a foundation in HTML, CSS,
              Javascript and now React, I'm eager to continue to expand my skills and take on any new 
              challenges that may come my way. When I'm not coding, you can find me reading, kayaking
              and hiking, or dedicating time to my family and friends.
            </div>
        </div>
     </section>
  )
}

export default About