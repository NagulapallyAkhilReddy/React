import React, { useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
 import { Formik } from 'formik';
 import * as Yup from "yup"
 import { themechange } from '../App';



function Contact() {

  const {theme,setTheme}=useContext(themechange)
  const initialValues={
    name:'',
    email:'',
    message:''
  }

  const SignupSchema=Yup.object().shape({
    name:Yup.string().trim().required("required"),
    email:Yup.string().matches(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,"please enter valid emial address").required("required"),
    message:Yup.string().trim().required("required")
  })

  const form =useRef();

  // const sendEmail=(e)=>{
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     'service_h92s64l',
  //     'template_lok60xp',
  //     form.current,
  //     'ch4mI04AhYieICn62'
  //   )
  //   .then(()=>{
  //     toast("Message sent successfully!, Thank you for your time.");
  //     form.current.reset();

  //   })
  //   .catch(()=>{
  //     alert("message failed to send, please try again.");
  //   })
   
  // }
  return (
    <div className='flex flex-col h-auto sm:h-[490px] ' style={{backgroundColor:theme==='light'?'white':'black', color:theme==='light'?'black':'white'}}>
      <h2 className='text-2xl font-semibold mt-5  text-center '>Contact Us</h2>
      <section className='ml-3 flex flex-col md:flex-row gap-6 justify-between'>
        <section>
          <img className='rounded-full max-w-full h-auto lg:h-[400px]  ' src="/images/contact.jpg" alt="contact" />
        </section>
        <section className='mr-5 flex-col items-center h-[400px]'>
          <h2 className='text-center font-semibold pb-10'>Fill out the form, and we will get back to you.</h2>
         <section className='flex flex-col gap-3'>
          <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={({resetForm})=>
        
      
    emailjs.sendForm(
      'service_h92s64l',
      'template_lok60xp',
      form.current,
      'ch4mI04AhYieICn62'
    )
    .then(()=>{
      toast.success("Message sent successfully!, Thank you for your time.");
      form.current.reset();
      form.current.reset();
          resetForm();

    })
    .catch(()=>{
      toast.error("message failed to send, please try again.");
    })
   
  
           
          }
          >{({handleChange,handleBlur,values,errors,handleSubmit,touched})=>
            <form ref={form} onSubmit={handleSubmit} className='flex flex-col  justify-center'  >
            <ToastContainer />
             <input type="text" name='name' placeholder='your name' required className='rounded-2xl pl-3 mb-3 border-2 border-black-500  focus:border-blue-300' onChange={handleChange} onBlur={handleBlur} value={values.name} />
             {errors.name && touched.name && (<p className='text-red-500'>{errors.name}</p> )}
             <input type="email" name='email' placeholder='your email' required className='rounded-2xl pl-3 mb-3 border-2 border-black-500 focus:border-blue-300' onChange={handleChange} onBlur={handleBlur} value={values.email} />
             {errors.email && touched.email && (<p className='text-red-500'>{errors.email}</p> )}
              <textarea name="message" rows="auto" placeholder='Your Message' required className='rounded-2xl pl-3 mb-3 h-auto w-full  border-2 border-black-500  focus:border-blue-300' onChange={handleChange} onBlur={handleBlur} value={values.message} ></textarea>
              {errors.message && touched.message && (<p className='text-red-500'>{errors.message}</p> )}
              <div className='text-center'>
              <button type='submit'  className='border-amber-200 border-r-2 rounded-2xl text-center border-2 px-4  mb-9 hover:border-red-500  '> Send </button>
              </div>
          </form>
         
          }
          </Formik>
          </section>
        </section>
      </section>
           
     
    </div>
  )
}

export default Contact
