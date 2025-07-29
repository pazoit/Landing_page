import React from 'react'
import Brand from './Brand'
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='flex justify-between  w-full  h-20  p-10'>
      <Brand/>
      <IoIosMenu className='large:hidden'/>
      <nav className='font-bold gap-12 items-center hidden  large:flex '>
        <h2 className='text-primaryColor-600'>Home</h2>
        <h2>About</h2>
        <h2>About</h2>
        <h2>Contact</h2>
      </nav>
     
    </div>
  )
}

export default Navbar
