import React from 'react'
import Type from './type.jsx'

const header = () => {
  return (
    <header className= 'fixed p-4 text-center text-white mt-40 z-10'>
        <div className=''>
            <div>
                <h1>
                    Hello! I'm Anastasia!
                </h1>
            </div>
            <div className= 'text-3xl md:text-3xl font-bold'>
                <Type />
            </div>
        </div>
    </header>
  )
}

export default header