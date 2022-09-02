import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <>
    <div className='flex items-center justify-center h-screen mb-28 bg-fixed bg-center bg-cover custom-img'>
      {/* overlay */}
        <div className='absolute bg-black/60 top-0 bottom-0 left-0 right-0 z-[2]'/>
        
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold '>{heading}</h2>
        <div className='py-5 text-xl'>{message}</div>
        <button className='px-8 py-2 border rounded-md'>book</button>
        </div>
        
    </div>
    </>
   
  )
}

export default Hero