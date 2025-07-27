import React from 'react'

const Contact = ({
    name,
    address,
}) => {
  return (


        <div className='flex flex-col gap-2'>
           <h1 className='font-bold text-[28px]'>{name}</h1> 
            <p className='font-semibold text-gray-500 text-[20px]'>{address}</p>
        </div>

    
    
  )
}

export default Contact
