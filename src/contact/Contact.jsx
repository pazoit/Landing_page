import React from 'react'

const Contact = ({
    name,
    address,
}) => {
  return (


        <div className='flex flex-col gap-2'>
           <h1 className='font-bold text-2xl'>{name}</h1> 
            <p className='font-semibold text-gray-500'>{address}</p>
        </div>

    
    
  )
}

export default Contact
