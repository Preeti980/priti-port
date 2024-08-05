import React from 'react'
import Img from '../assets/aboutme.jpg'
import { IoIosContact } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function About() {
  return (
    <>
    
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20' name="About">
     
      <div className='text-center'>
        <h1 className='text-3xl font-bold '> About Me</h1>
        <p className='text-purple-600'>Introduction</p>
    
     </div>

     <div className="flex flex-col md:flex-row ">
              <div className='md:w-1/2 mt-10 md:mt-24 space-y-2 order-1 md:order-1 px-30 ml-10'>
                         <span className='text-xl'>
                         Hey there! 👋</span>
                        <p className='text-sm md:text-md text-justify'> Hey there! I'm Priti Chauhan, a B.Tech student at Babu Banarasi Das University in Lucknow, UP. Currently, I'm in my final year, specializing in Computer Science and Engineering (CSE).</p>
                        <br/>
                   <p className='text-sm md:text-md text-justify'>
                   Passionate front-end developer with a keen eye for design and a commitment to creating seamless, user-friendly experiences. My passion lies in the ever-evolving world of technology, with a special focus on FullStack Development, Data Structures and Algorithms, and exploring various new domains.
                 
                     </p>
                      <br/>
                      <p className='text-sm md:text-md text-justify'>
                      Feel free to reach out and connect with me through the social links below.
                     </p>
                      <br/>
                      <span className='text-sm md:text-md text-justify flex '>
                            <IoIosContact  size={30}/>
                           <p className='ml-8'> Priti Chauhan</p> 
                      </span>
                      <span className='text-sm md:text-md text-justify flex '>
                            <BsFillTelephoneFill  size={25}/>
                           <p className='ml-8'> +91-6367984492</p> 
                      </span>
                      <span className='text-sm md:text-md text-justify flex '>
                            <MdEmail  size={30} />
                           <p className='ml-8 text-sm  md:text-md'>preetichauhan1939117@gmail.com</p> 
                      </span>
                 
               </div>
                     <div className='md:w-1/2 md:ml-48  md:mt-20 mt-8 order-2 mr-2.5'>
                          <img src={Img} alt='' className="rounded-full md:w-[450px] md:h-[450px] "/>
                      </div>
        </div>
     </div>
     </>
  )
}

export default About