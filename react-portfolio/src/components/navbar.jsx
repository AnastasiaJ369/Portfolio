import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-cyan-500 opacity-75 p-4 fixed top-0 w-full z-10 shadow-xl shadow-cyan-500/50'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-8'>
                <div className='flex-shrink-0 flex items-left text-white font-bold text-lg'>
                   Anastasia    
                </div>
                <div className='flex-shrink-0 flex justify-between items-right text-white font-bold text-lg'>
                    <ul>
                        <li className='inline-block mx-4 hover:text-black cursor-pointer'>Home</li>
                        <li className='inline-block mx-4 hover:text-black cursor-pointer'>About</li>
                        <li className='inline-block mx-4 hover:text-black cursor-pointer'>Projects</li>
                        <li className='inline-block mx-4 hover:text-black cursor-pointer'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar