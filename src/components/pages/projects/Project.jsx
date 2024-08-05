import React from 'react'
import './Project.css'
import Vdo1 from  '../../../assets/ecoApp.mp4'
import Vdo2 from  '../../../assets/bookStore.mp4'
import v3 from '../../../assets/vdo4.mp4'
function Project() {
  return (
    <>
     <div  className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20 ' name="Projects">
    <div className='text-center'>
        <h1 className='text-3xl font-bold '> Projects</h1>
        <p className='text-purple-600'>My projects</p>
    </div>
    <div className="row md:mt-10" id="ads">
       
            <div className="col-md-4 mt-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack </span>
                  
                     <video src={Vdo1} autoPlay loop muted />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">mongoDB</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      E-commerce Website
                    </h6>
                    <p>March 2024</p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Preeti980/Ecommerce-app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">React Basic</span>
                  <video src={Vdo2} autoPlay loop muted />
                </div>
                <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                  <span className="card-detail-badge">Tailwind CSS</span>
                  <span className="card-detail-badge">Firebase</span>
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                  <h6 className="text-uppercase">
                      BookStore App
                    </h6>
                    <p>january 2024</p>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Preeti980/bookStoreApp"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <video src={v3} autoPlay loop muted />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>

                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Amazon-Clone</h5>
                    <p>September 2023</p>
                  </div>
                  <a className="ad-btn" href="https://github.com/Preeti980/Amazon-clon">
                    View
                  </a>
                </div>
              </div>
              
            </div>
            <div className="  card-body text-center"><a  className="more" href='https://github.com/Preeti980' >View More 👉🏻</a> </div>
           

        </div>
    </div>
    <hr/>
    </>
  )
}

export default Project