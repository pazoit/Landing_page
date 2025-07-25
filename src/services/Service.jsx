import React from 'react'
import { SiBookstack } from "react-icons/si";
const Service = ({
    define,
    description,
}) => {
  return (
    
    <div className='bg-primaryColor-50 h-[15rem] w-[20rem] p-10 '>
        <div className='flex justify-center'>
            <SiBookstack className='bg-primaryColor-400 w-18 h-20 rounded-[35px] p-4 '/>
        </div>
      
      <h2 className='font-bold text-2xl text-center'>{define}</h2>
      <p className='text-center font-semibold'>{description}</p>
       
    </div>
    
       
    
  )
}

export default Service
