import React,{useState} from 'react'
import Image from 'next/image'
import { SliderData } from './sliderData'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'
const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length=slides.length

    const nextSlide=()=>{
        setCurrent(current === length -1 ? 0 : current+1)
    }
    const prevSlide=()=>{
        setCurrent(current === 0 ? length-1 : current-1)
    }

    if(!Array.isArray(slides) || slides.length<=0)
    {
        return null;
    }

  return (
    <>
    <div id='gallery' className='max-w-[1240px] mx-auto '>
        <h1 className='font-bold text-2xl text-center p-4'>Gallery</h1>
        <div>
        <div className='flex relative justify-center p-4 '>
            {SliderData.map((slide,index)=>{
                return (
                    <div className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                        
                        <FaArrowCircleLeft onClick={prevSlide} size={50} className='absolute top-[50%] left-[50px] text-white/70 cursor-pointer select-none z-[2]'/>
                        {index===current && 
                        <Image src={slide.image} width={1440} height={600} objectFit='cover' />}
                         <FaArrowCircleRight onClick={nextSlide} size={50} className='absolute top-[50%] right-[50px] text-white/70 cursor-pointer select-none z-[2]'/>
                         </div>
                    
                );
            })}
            </div>
        </div>
    </div>
    </>
  )
}

export default Slider