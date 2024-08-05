import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp, IoMoon, IoSunny } from "react-icons/io5";
import {Link} from "react-scroll"
import  Img from '../assets/p.jpg'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from '../context/ThemeProvide';
function Navbar() {
  const [menu,setMenu] = useState(false);
  const { theme, setTheme} = useTheme();
  //handle theme
  const handleTheme=() =>{
    setTheme((prevState)=>
    (prevState === 'light' ? 'dark' : 'light'));
  };
const navItems=[
  {
    id:1,
    text:"Home",
  },
  {
    id:2,
    text:"About",
  },
  {
    id:3,
    text:"Skills",
  },
  {
    id:4,
    text:"Cetificates",
  },
  {
    id:5,
    text:"Projects"
  },
  {
 id:6,
 text:"Education"
  },
  {
    id:7,
    text:"Contact",
  },

]
  return (
   <>
   <div  className={`max-w-screen-2xl container mx-auto h-16 px-4 md:px-20 shadow-md fixed top-0 right-0 left-0 z-50 ${
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}>
    <div className='flex justify-between items-center h-16'>
      <div className='flex space-x-2'>
        <img src={Img} alt='' className='h-12 w-12 rounded-full '/>
        <h1 className='font-semibold text-xl cursor-pointer'>Pri
          <span className='text-purple-500 text-2xl'>ti</span>
        <p className='text-sm'>Chauhan</p></h1>
      </div>
      {/* desktop navbar */}
      <div >
        <ul className='hidden md:flex space-x-8'>
         {
          navItems.map(({id,text})=>(
            <li key={id}
            className='hover:scale-105 duration-00 font-semibold cursor-pointer mr-50'
            >
            <Link
            to={text}
           smooth={true}
           duration={500}
           offset={-70}
           activeClass='active'
            >
            {text}
            </Link>
            </li>
          ))
         }
       <div className="theme-btn" onClick={handleTheme}>
      {theme==='light' ? (<BsFillMoonStarsFill size={25} /> )
       : (<BsFillSunFill size={25} />)}
            </div>
        </ul>
       
        <div onClick={()=>setMenu(!menu)} className='md:hidden'>
          {menu ? <AiOutlineMenu size={24}/>:<IoCloseSharp  size={24}/>}</div>
      </div>
      
    </div>
  
    {/* mobile navbar */}
    {
      menu && (
<div className='bg-white '>
      <ul className='md:hidden flex flex-col h-screen items-center justify-center  space-y-3 text-xl' >
      {
          navItems.map(({id,text})=>(
            <li key={id}
            className='hover:scale-105 duration-00 font-semibold cursor-pointer'
            >
              <Link
              onClick={() => setMenu(!menu)}
              to = {text}
              smooth ={true}
              duration={500}
              offset={-70}
              activeClass='active'
              >
              {text}
              </Link>
              </li>
          ))
         }
      
      </ul>
    
    </div>
      )
    }
    
   </div>
   </>
  )
}

export default Navbar