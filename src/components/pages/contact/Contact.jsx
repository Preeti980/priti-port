import React, { useRef } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'
import Img from '../../../assets/contact-us.webp'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_erg3s4f', 'template_m6x4twx', form.current, 'ZM5X6pRSgdN1prGDk')
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: 'top-center',  // Correct string for position
            autoClose: 3000,
          });
          form.current.reset(); // Clear the form
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, {
            position: 'top-center',  // Correct string for position
            autoClose: 3000,
          });
        }
      );
  };

  return (
<>
<ToastContainer />
<div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 contact' name="Contact">
<div className='text-center '>
        <h1 className='text-3xl font-bold '> Contact Me</h1>
        <p className='text-purple-600'>My  Contact</p>
    </div>
<div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 cal-lg-6 cal-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                 
                    <img src={Img} alt="contact" className='image ' />
                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-6">
           
                <div className='card2 d-flex card border-0 px-4 py-5'>
                  <div className="row ">
                    <div className='row flex justify-center'>
                      <h6 className='flex mb-6'>
                        Contact with 
                        <a href='https://www.linkedin.com/in/preeti-chauhan-352101256/'>
                          <BsLinkedin color='blue' size={30} className='ms-2' />
                        </a>
                        <a href='https://github.com/Preeti980'>
                          <BsGithub color='black' size={30} className='ms-2' />
                        </a>
                        <a href='https://telegram.org/dl'>
                          <FaTelegram color='#229ED9' size={30} className=' ms-2' />
                        </a>
                      </h6>
                    </div>
                    <div className="row px-3 md-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="row px-3">
                      <label>Name</label>
                      <input type="text" name="from_name" placeholder='Enter your name' className='mb-3' required />
                      <label>Email</label>
                      <input type="email" name="from_email" placeholder='Enter your email' className='mb-3' required />
                      <label>Message</label>
                      <textarea name="message" placeholder='Message' className='mb-3' />
                      <input type="submit" value="Send" className='button' />
                    </form>
                  </div>
                </div>
           
            </div>
          </div>
        </div>
</div>
</>
  )
}

export default Contact