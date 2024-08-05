import React from 'react'
import {  TechStack} from '../utils/TechStack';
function Skills() {
  return (
   <>
   <div  className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20' name="Skills">
    <div className='text-center'>
        <h1 className='text-3xl font-bold '> Skills</h1>
        <p className='text-purple-600'>My Skills</p>
    </div>
    <div className="row">
         {TechStack.map(tech=>(
          
           <div key={tech._id} className="col-md-3">
            <div className="card m-2">
               <div className="card-content ">
                  <div className="card-body  hover:bg-purple-600 shadow-lg transition ease-in-out delay-150  hover:translate-y-1 hover:rounded-md hover:scale-110 duration-300 ">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center ">
                      <tech.icon className='tech-icon'/> 
                      </div>
                       <div className="media-body">
                        <h5>
                           {tech.name}
                        </h5>
                       </div>
                    </div>
                  </div>
                </div> 
            </div>
           </div>
        
          ))}
       </div>
    </div>
   
    <hr/>
   </>
  )
}

export default Skills