import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-2 divide-x-2 divide-solid  gap-10 h-[20rem] p-20'>
        <div className='flex flex-col gap-3'>
            <p className='text-primaryColor-600 font-bold text-[20px]'>About Us</p>
            <p className='font-extrabold text-4xl pr-10'>We offer creative working 
            environments that suit your business</p>
        </div>
        {/* <div className='border-1'></div> */}
      
        {/* <hr className='w-full'/> */}
        <div className='flex flex-col gap-3 text-start p-4'>
            <p className='font-semibold text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, conubia 
            leo rutrum praesent dui turpis lobortis, vulputate pellentesque tristique 
            primis cum tincidunt placerat maecenas, velit metus fermentum eget</p>
            <h2 className='text-primaryColor-600 font-bold text-[20px] '>More About Us</h2>
        </div>
      
    </div>
  )
}

export default About
