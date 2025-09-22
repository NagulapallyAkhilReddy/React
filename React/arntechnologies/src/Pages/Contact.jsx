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
    <div className='flex flex-col h-auto min-h-screen justify-center items-center ' style={{backgroundColor:theme==='light'?'white':'black', color:theme==='light'?'black':'white'}}>
      <h2 className='text-2xl font-semibold mt-3 mb-5  text-center '>Contact Us</h2>
      <section className='ml-3 flex flex-col md:flex-row gap-30 md:gap-60 items-center md:h-[300px]' >
        <section className='flex flex-col justify-center items-center'>
          <img className='max-w-[400px] w-[200px] md:w-[300px] lg:w-[400px] rounded-2xl h-auto object-cover  ' src="/images/contact.jpg" alt="contact" />
        </section>
        <section className='mx-3 flex-col items-center mb-9 '>
          <h2 className='text-center font-semibold pb-3'>Fill out the form, and we will get back to you.</h2>
         
          <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(values,{resetForm})=>{
            try{
              emailjs.sendForm(
                'service_h92s64l',
                  'template_lok60xp',
                  form.current,
                  'ch4mI04AhYieICn62'
              )
              .then((res)=>{
                toast.success("Message sent Successfully, 'Thank you for your time!'")
                form.current.reset();
                resetForm();
                
              })
             
            }
             catch(err){
              toast.error("Message failed to send, please try again"+err)
            }
            
          }}
        
      
             
          >{({handleChange,handleBlur,values,errors,handleSubmit,touched})=>
            <form ref={form} onSubmit={handleSubmit} className='flex flex-col  justify-center'  >
            <ToastContainer />
             <input type="text" name='name' placeholder='your name' required className='rounded-2xl pl-3 mb-3 border-2 border-black-500  focus:border-blue-300' onChange={handleChange} onBlur={handleBlur} value={values.name} />
             {errors.name && touched.name && (<p className='text-red-500'>{errors.name}</p> )}
             <input type="email" name='email' placeholder='your email' required className='rounded-2xl pl-3 mb-3 border-2 border-black-500 focus:border-blue-300' onChange={handleChange} onBlur={handleBlur} value={values.email} />
             {errors.email && touched.email && (<p className='text-red-500'>{errors.email}</p> )}
              <textarea name="message" rows="5" placeholder='Your Message' required className='rounded-2xl pl-3 mb-3 h-auto w-full  border-2 border-black-500  focus:border-blue-300' onChange={handleChange} onBlur={handleBlur} value={values.message} ></textarea>
              {errors.message && touched.message && (<p className='text-red-500'>{errors.message}</p> )}
              <div className='text-center'>
              <button type='submit'  className='border-amber-200 border-r-2 rounded-2xl text-center border-2 px-4  mb-9 hover:border-red-500  '> Send </button>
              </div>
          </form>
         
          }
          </Formik>
          
        </section>
        </section>
        <section className='border-2 rounded-2xl mx-3 my-12 p-1'>
          <h2 className='font-extrabold '>For inquiries or assistance, please contact us at: </h2>
          <p><span className='font-bold'>Phone: </span>+1 (913) 548-8556</p>
          <p><span className='font-bold'>Email: </span> reddy@arntechnologies.com</p>
          <p><span className='font-bold'>Address: </span> Los Angeles, California</p>
        </section>
      
           
     
    </div>
  )
}

export default Contact
