import React from 'react'
import Img1 from '../../../assets/dsa.jpg'
import Img2 from '../../../assets/fullStack.jpg'
import Img3 from '../../../assets/web.jpg'
import './Certificates.css'
function Cerficates() {
  return (
   <>
   <div  className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ' name="Cetificates">
    <div className='text-center'>
        <h1 className='text-3xl font-bold '> Certificates</h1>
        <p className='text-purple-600'>My Certification</p>
    </div>
    <div className="row " id="ads">
           
               <div className="col-md-4 mb-2  ">
                   <div className="card rounded">
                      <div className="card-image">
                        <img
                           src={Img1}
                              alt="project1" 
                           />
                      </div>
                      <div className="card-body text-center">
                              <div className="ad-title m-auto">
                                <h6 className="text-uppercase">DSA with java</h6>
                     </div>
                     <a
                     className="ad-btn"
                     href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/"
                     >
                     View
                     </a>
                   </div>
              </div>
            </div>
            <div className="col-md-4 mb-2 ">
                   <div className="card rounded">
                      <div className="card-image">
                        <img
                           src={Img2}
                              alt="project1" 
                           />
                      </div>
                      <div className="card-body text-center">
                              <div className="ad-title m-auto">
                                <h6 className="text-uppercase"> full stack</h6>
                     </div>
                     <a
                     className="ad-btn"
                     href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/"
                     >
                     View
                     </a>
                   </div>
              </div>
            </div>
            <div className="col-md-4 mb-2 ">
                   <div className="card rounded">
                      <div className="card-image">
                        <img
                           src={Img3}
                              alt="project1" 
                           />
                      </div>
                      <div className="card-body text-center">
                              <div className="ad-title m-auto">
                                <h6 className="text-uppercase"> mern stack</h6>
                     </div>
                     <a
                     className="ad-btn"
                     href="https://www.linkedin.com/in/preeti-chauhan-352101256/details/certifications/"
                     >
                     View
                     </a>
                   </div>
              </div>
            </div>
           
            
        
            <div className="  card-body text-center"><a  className="more" href='https://www.linkedin.com/in/preeti-chauhan-352101256/' >View More 👉🏻</a> 
            
            </div>
           
          
        </div>
    </div>
    <hr/>
   </>
  )
}

export default Cerficates