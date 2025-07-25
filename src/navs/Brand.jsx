import React from 'react'

const Brand = () => {
  return (
    <div className='flex justify-between  w-55 items-center'>
      <img className='h-10' src="logo.png" alt="" />
      <h1 className='font-bold h-2rem text-3xl flex gap-2  w-48 '><strong>Business</strong><span className='text-primaryColor-600'>Cafe</span></h1>
    </div>
  )
}

export default Brand
