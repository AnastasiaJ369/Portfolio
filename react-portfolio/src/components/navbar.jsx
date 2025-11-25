import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-cyan-500 p-4 fixed top-0 w-full z-10 shadow-xl shadow-cyan-500/50'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-8'>
                <div className='flex-shrink-0 flex items-left text-white font-bold text-lg'>
                   Anastasia    
                </div>
                <div className='flex-shrink-0 flex justify-between items-right text-white font-bold text-lg'>
                    <ul>
                        <li className='inline-block mx-4 hover:text-black cursor-pointer'>
                            <a href="#Home">Home</a>
                        </li>
                        <li className='inline-block mx-4 hover:text-black cursor-pointer'>
                            <a href="#About">About</a>
                        </li>
                        <li className='inline-block mx-4 hover:text-black cursor-pointer'>
                            <a href="#Projects">Projects</a>
                        </li>
                        <li className='inline-block mx-4 hover:text-black cursor-pointer'>
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar