import React from 'react'
import Button from './button'

const Coffeebg = (
  
) => {
  return (
    <div className='bg-[url(background-image.jpg)] h-140   flex justify-center items-center'>
      {/* <img className='w-full h-150 -indent-px absolute ' src="background-image.jpg" alt="" /> */}
      <div className='flex-col justify-center text-center text-white w-160 gap-20'> 
        <p className='font-semibold text-2xl '>The Best WorkSpace in Kigali</p>
        <h1 className='font-bold h-2rem text-4xl '><span className='text-primaryColor-600'>Professional</span> , Creative,Flexible, Scalable <span className='text-primaryColor-600'>Workspace</span></h1> 
        <p className='text-start'>Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office 
        spaces. Elevate your business with flexible solutions tailored to your needs. Find your perfect 
        office today!</p>
        <Button/>
      </div>
      
    </div>
  )
}

export default Coffeebg
