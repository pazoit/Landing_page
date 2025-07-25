import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[url(footer.jpg)] flex flex-col justify-center items-center h-[17rem] gap-6 p-10'>
        <h1 className='font-extrabold text-4xl p-10 text-white'> <span className='text-primaryColor-600'>Our</span> Mission</h1>
        <p className='text-center font-bold text-1xl text-white pl-[20px] pr-[20px] w-[63rem]'> Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit odio felis aliquet montes turpis consequat, est sociosqu 
        vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus quis posuere, ultrices fermentum libero pretium 
        convallis pharetra</p>
        <div className='flex gap-4 '>
            <div className='w-18  h-1 bg-white rounded-2xl'></div>
            <div className='w-18  h-1 bg-primaryColor-600 rounded-2xl'></div>
        </div>
    </div>
  )
}

export default Footer
