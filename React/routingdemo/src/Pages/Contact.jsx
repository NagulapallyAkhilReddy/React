import React, { useContext, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import { themechangeR } from '../App';
import { Formik } from 'formik';
import * as Yup from 'yup'



function Contact() {
  const {theme,setTheme}=useContext(themechangeR)
  const form =useRef();
  const initialValues={name:'',email:'',message:''}

  const SignupSchema=Yup.object().shape({
    name:Yup.string().trim().required("required"),
    email:Yup.string().matches(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,"please enter a valid email id").required("required"),
    message:Yup.string().trim().required("required")
  })

  // const sendEmail=(e)=>{
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     'service_h92s64l',
  //     'template_lok60xp',
  //     form.current,
  //     'ch4mI04AhYieICn62'
  //   )
  //   .then((res)=>{
  //     toast.success("Message sent successfully!, Thank you for your time.");
  //     form.current.reset();

  //   })
  //   .catch((err)=>{
  //     toast.failure("message failed to send, please try again.");
  //   })
   
  // }
  return (
    <div className='flex flex-col min-h-screen ' style={{backgroundColor:theme==='light'?'white':'black', color:theme==='light'?'black':'white'}}>
      <h2 className='text-2xl font-semibold mt-5  text-center '>Contact Us</h2>
      <section className='ml-3 flex flex-col md:flex-row gap-6 justify-between'>
        <section className='flex flex-col justify-center items-center'>
          <img className=' max-w-[400px] w-[200px] md:w-[300px] lg:w-[400px] rounded-2xl h-auto object-cover  ' src="/images/contact.jpg" alt="contact" />
        </section>
        <section className='flex flex-col'>
        <section className='mx-3 flex-col items-center mb-9'>
          <h2 className='text-center font-semibold pb-3'>Fill out the form, and we will get back to you.</h2>
         
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
       resetForm(); 

    })
    .catch(()=>{
      toast.failure("message failed to send, please try again.");
    })

   
   } >{({values,handleBlur,handleChange,handleSubmit,errors,touched})=><form ref={form} onSubmit={handleSubmit} className='flex flex-col  justify-center '  >
            <ToastContainer />
             <input type="text" name='name' placeholder='your name' required className='rounded-2xl pl-2 mb-3 border-2' onChange={handleChange} onBlur={handleBlur} value={values.name}  />
            <p className='text-red-400'>{errors.name && touched.name && errors.name}</p> 
             <input type="email" name='email' placeholder='your email' required className='rounded-2xl pl-2  mb-3 border-2' onChange={handleChange} onBlur={handleBlur} value={values.email} />
              <p className='text-red-400'>{errors.email && touched.email && errors.email}</p>
              <textarea type='text' name="message" rows="auto" placeholder='Your Message' required className='rounded-2xl pl-2  mb-3 h-auto w-full  border-2' onChange={handleChange} onBlur={handleBlur} value={values.message} ></textarea>
              <p className='text-red-400'>{errors.message && touched.message && errors.message}</p> 
              <div className='text-center'>
              <button type='submit'  className=' border-amber-200 border-r-2 rounded-2xl text-center border-2 px-4  hover:border-red-500 '> Send </button>
              </div>
          </form>}
           
          </Formik>
         
        </section>
        <section className='border-2 rounded-2xl mx-3 mb-2 p-1'>
          <h2 className='font-extrabold '>For inquiries or assistance, please contact us at: </h2>
          <p><span className='font-bold'>Phone: </span>+1 (862) 812-4963</p>
          <p><span className='font-bold'>Email: </span> reddy@ruhatech.com</p>
          <p><span className='font-bold'>Address: </span> 37401 Gillett Rd Fremont CA 94536</p>

        </section>
        </section>
      </section>
     
    </div>
  )
}

export default Contact
