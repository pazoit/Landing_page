import React from 'react'
import Brand from './Brand'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-150 w-380 h-20 border-1px'>
      <Brand/>
      <nav className='flex font-bold gap-12 items-center'>
        <h2 className='text-primaryColor-600'>Home</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </nav>
     
    </div>
  )
}

export default Navbar
