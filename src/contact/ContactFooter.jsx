import React from 'react'


const ContactFooter = ({
    title,
    Home,
    space,
    about,
    contact
}) => {
  return (
    <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-2xl '>{title}</h1>
        <hr className='text-primaryColor-600 h-[3px] w-[14rem]'/>
        <p className='font-semibold text-[20px]'>{Home}</p>
        <p className='font-semibold text-[20px]'>{space}</p>
        <p className='font-semibold text-[20px]'>{about}</p>
        <p className='font-semibold text-[20px]'>{contact}</p>
    </div>
  )
}

export default ContactFooter
