import React,{useState ,useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [nav,setNav]=useState(false)
    const [color,setColor]=useState('transparent')
    const [textColor,setTextColor]=useState('white')
    const handleNav=()=>{
        setNav(!nav);
    }

    useEffect(() => {
      const changeColor=()=>{
        if(window.scrollY >= 95){
            setColor('#ffffff')
            setTextColor('#000000')
        }else{
            setColor('transparent')
            setTextColor('#ffffff')
        }

    }
    window.addEventListener('scroll',changeColor)
    }, [])
    

  return (
    <>
    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 w-full ease-in duration-300 z-[3]'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href={'/'}>
            <h1 style={{color:`${textColor}`}} className='font-bold text-4xl'>Captur</h1>
        </Link>
        <ul style={{color:`${textColor}`}} className='hidden sm:flex gap-6'>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/#gallery'}>Gallery</Link></li>
            <li><Link href={'/#work'}>Work</Link></li>
            <li><Link href={'/#contact'}>Contact</Link></li>
            
        </ul>

        <div onClick={handleNav} className='sm:hidden block z-10'>
            {nav? (<AiOutlineClose size={20} style={{color:`${textColor}`}} />) : 
            (<AiOutlineMenu size={20} style={{color:`${textColor}`}}/>)}
        </div>

        <div className={nav ? 'sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300': 'sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
        <ul>
            <li className='text-4xl p-4 hover:text-gray-500'><Link href={'/'}>Home</Link></li>
            <li className='text-4xl p-4 hover:text-gray-500'><Link href={'/#gallery'}>Gallery</Link></li>
            <li className='text-4xl p-4 hover:text-gray-500'><Link href={'/#work'}>Work</Link></li>
            <li className='text-4xl p-4 hover:text-gray-500'><Link href={'/#contact'}>Contact</Link></li>
        </ul>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar