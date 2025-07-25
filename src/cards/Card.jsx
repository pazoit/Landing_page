import React from 'react'

const Card = ({
    image,
    title,
    description,
    more,
}) => {
  return (
    <div className='flex flex-col gap-2 w-260 '>
      <img src={image} className="w-full h-98" />
      <div className='flex flex-col gap-3'>
          <h1 className="text-primaryColor-500 font-bold text-2xl text-center">
            {title}
          </h1>
          <div className='flex flex-col justify-center '>
            <div className='flex justify-center'>
                 <hr className='bg-primaryColor-500 w-13 h-1 border-none' />
            </div>
            <p className='font-semibold text-center pl-18 pr-18'>{description}</p> 
          </div>
          <p className='text-primaryColor-500 font-bold text-[20px] text-center'>{more}</p>
      </div>
    </div>
  )
}

export default Card
