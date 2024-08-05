import React from 'react'
import { MdSchool } from "react-icons/md";
function Education() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-28' name="Education">
    <div className='text-center'>
        <h1 className='text-3xl font-bold '> Education</h1>
        <p className='text-purple-600'>My Education details</p>
    </div>
    <div className="row " id="ads">
    <div className="col-md-4  mt-4">
              <div className="card rounded ">
                <div className="card-image-overly m-auto mt-3">
                  <MdSchool size={40} color='blueviolet'/>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h3 className='font-bold'>Btech</h3>
                    <h5 className="text-uppercase mt-2">Computer Science</h5>
                    {/* <p>Babu Banarasi Das University Lucknow, UP </p> */}
                    <span className="text-center px-8 mt-2">Babu Banarasi Das University Lucknow, UP</span><br/>
                    <span className="text-center px-8 mt-6">Year: 2021-2025</span><br/>
                    <span className="text-center px-8">SGPA: 9+</span>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-md-4 mt-4">
              <div className="card rounded">
                <div className="card-image-overly m-auto mt-3">
                  <MdSchool size={40} color='blueviolet'/>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h3 className='font-bold'>Intermediate</h3>
                   
                    {/* <p>Babu Banarasi Das University Lucknow, UP </p> */}
                 
                    
                    <span className="text-center py-10">Swami Vivekanand Inter College GopalPur Madhiya, SultanPur,UP</span><br/><br/>
                    <span className="text-center px-8 mt-6">Year: 2018-2019</span><br/>
                    <span className="text-center px-8">Percentage: 73.4%</span>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-md-4 mt-4">
              <div className="card rounded">
                <div className="card-image-overly m-auto mt-3">
                  <MdSchool size={40} color='blueviolet'/>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h3 className='font-bold'>High School</h3>
                    
                    {/* <p>Babu Banarasi Das University Lucknow, UP </p> */}
                    <span className="text-center py-10">Swami Vivekanand Inter College GopalPur Madhiya, SultanPur,UP</span><br/><br/>
                    <span className="text-center px-8 mt-6">Year: 2016-2017</span><br/>
                    <span className="text-center px-8">Percentage: 86.83%</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
    </div>
    <hr />
    </>
  )
}

export default Education