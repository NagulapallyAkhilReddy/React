import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';


function Contact() {
  const form =useRef();

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm(
      'service_h92s64l',
      'template_lok60xp',
      form.current,
      'ch4mI04AhYieICn62'
    )
    .then((res)=>{
      toast("Message sent successfully!, Thank you for your time.");
      form.current.reset();

    })
    .catch((err)=>{
      alert("message failed to send, please try again.");
    })
   
  }
  return (
    <div className='flex flex-col  '>
      <h2 className='text-2xl font-semibold mt-5  text-center '>Contact Us</h2>
      <section className='ml-3 flex flex-col md:flex-row gap-6 justify-between'>
        <section>
          <img className='rounded-full max-w-full h-auto lg:h-[400px]  ' src="/images/contact.jpg" alt="contact" />
        </section>
        <section className='mr-10 flex-col items-center h-[400px]'>
          <h2 className='text-center font-semibold pb-10'>Fill out the form, and we will get back to you.</h2>
         <section className='flex flex-col gap-3'>
           <form ref={form} onSubmit={sendEmail} className='flex flex-col  justify-center'  >
            <ToastContainer />
             <input type="text" name='name' placeholder='your name' required className='rounded-2xl pl-3 mb-3 focus:border-blue-300' />
             <input type="email" name='email' placeholder='your email' required className='rounded-2xl pl-3 mb-3 focus:border-blue-300'  />
              <textarea name="message" rows="5" placeholder='Your Message' required className='rounded-2xl pl-3 mb-3 h-auto w-full md:w-[300px]  focus:border-blue-300'  ></textarea>
              <div className='text-center'>
              <button type='submit'  className='border-amber-200 border-r-2 rounded-2xl text-center border-2 px-4 mt-10 hover:border-red-500 '> Send </button>
              </div>
          </form>
         </section>
        </section>
      </section>
     
    </div>
  )
}

export default Contact
