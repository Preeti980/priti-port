import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Resume from '../assets/resume.pdf'
import { ReactTyped} from "react-typed";
import Img from '../assets/p.jpg'
function Home() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-12' name="Home">
        
        <div className="flex flex-col md:flex-row">
              <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                         <span className='text-xl'>Welcome In My Portfolio</span>
                         <div className="flex space-x-1 text-2xl md:text-4xl">
                         <h1>Hello, I'm a</h1></div>
                   <div className="flex space-x-1 text-2xl md:text-4xl">
        
                       <ReactTyped
                       className='text-purple-700 font-bold'
                      strings={["Frontend Developer" ,"Backend Developer" ,"FullStack Developer"]}
                        typeSpeed={40}
                       backSpeed={50}
                      loop={true}
                      />
                    </div>
                    <br/>
                   <p className='text-sm md:text-md text-justify'>
                     Passionate frond-end developer with a keen eye for design and a comitment to create seamless, user-frendly experiences. Proficient in HTML , CSS , JavaScript and React, I specialize in translating creative concepts into responsive, visually appealing websites.</p>
                      <br/>
                   {/* social media  */}
                   <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                     <div className='space-y-2'>
                           <h1 className='font-bold  text-center'>Available on</h1>
                         <ul className='flex space-x-5'>
                          <li> 
                            <a href='https://www.linkedin.com/in/preeti-chauhan-352101256'  target="_blank">
                             <FaLinkedin color='blue' className='text-2xl cursor-pointer' /></a></li>
                            <li>  
                            <a href='https://github.com/Preeti980' target="_blank">
                                <FaGithub  className='text-2xl  cursor-pointer' /></a></li>
                           <li>  <a href='https://telegram.org/dl'  target="_blank"><FaTelegram color='#24A1DE' className='text-2xl cursor-pointer'/></a></li>
                          <li> <a href='https://x.com/PreetiC89413421?t=PTUgXIjl7wOjL2iI0m0SLw&s=08'  target="_blank"><BsTwitterX className='text-2xl cursor-pointer' /></a></li>
                          </ul>
             
                       </div>
                        <div className='space-y-2'>
                                
                             <div className=" px-10 ">
                                 
                             <a className='btn  bg-purple-500 hover:bg-purple-700' href={Resume} download="priti.pdf" >My Resume</a>
                              </div> 
                         </div> 
                    </div>
               </div>
                     <div className='md:w-1/2 md:ml-48  md:mt-20 mt-8 order-1 md:order-2'>
                          <img src={Img} alt='' className="rounded-full md:w-[400px] md:h-[400px] w-[250px] h-[250px] md:rounded-full justify-center ml-10" />
                      </div>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Home