import React, {  useContext, useEffect, useState,useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import jobdetails from '../JobDetails/jobdetails.json'
import * as Yup from 'yup'
import { Formik } from 'formik'
import emailjs from '@emailjs/browser'
import { ToastContainer,toast } from 'react-toastify'




function JobDetails() {
  const {id}=useParams();
  const navigate=useNavigate();
  const [showform,setShowform] =useState(false)

  const form=useRef();
  const initialValues={firstname:'',lastname:'',email:'',coverletter:null,resume:null}

  const SignupSchema=Yup.object().shape({
    firstname:Yup.string().trim().required("required"),
    lastname:Yup.string().trim().required("required"),
    email: Yup.string().trim().matches(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,"please enter valid emailID").required("required"),
    coverletter:Yup.string().nullable(),
    resume: Yup.string().required("requiredasync ")

  })
  
 
  const [jobdata,setJobdata]=useState(null)
  
  useEffect(()=>{
    const data=jobdetails?.[parseInt(id)]
    console.log(data)
    if(!data){
      navigate('/*')
    }
    else{
      setJobdata(data)
    }
    
  },[id,navigate])
  return (
    <div className='border-2 p-2 rounded-2xl mt-3'>
      <h1 className='text-xl font-semibold my-2'>{jobdata?.title}</h1>
      <p><span className='font-semibold'>Location :</span> {jobdata?.location}</p>
      <p className='mb-3'><span className='font-semibold'>Type:</span> {jobdata?.type}</p>
      <p> {jobdata?.description} </p>
      <h3 className='font-bold mt-3'>Responsibilities:</h3>
      <ul className='list-disc list-inside'>{jobdata?.responsibilities.map((r,i)=>(
        <li >{r}</li>
      ))} 
         </ul>
         <h3 className='font-bold mt-3'>Requirements:</h3>
      <ul className='list-disc list-inside'> {jobdata?.requirements.map((r,i)=>(
        <li>{r}</li>
      ))}
         </ul>
         <div className='flex justify-center pt-3 pb-6'>
         <button onClick={()=>setShowform(true)} className='border-2 p-2 px-4 rounded-2xl bg-blue-400 hover:bg-blue-500'>Apply</button>
         </div>

         {showform && (
           <div className=' fixed inset-0 flex justify-center items-center bg-gray-600 opacity-95 z-0 '>
            <div className='bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-8 relative'>
              <button className='absolute top-2 right-4 text-gray-400 hover:text-black' onClick={()=>setShowform(false)}>x</button>
              <h2 className='font-semibold text-center text-2xl pb-3'>Job Applictaion form</h2>
              <Formik 
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={async (values,{resetForm})=>{
                try{
                  const response =await emailjs.send(
                    'service_h92s64l',
                    'template_a03nqhv',
                    {
                      firstname: values.firstname,
                      lastname: values.lastname,
                      email: values.email,
                      coverletter: values.coverletter,
                      resume: values.resume
                    },
                    'ch4mI04AhYieICn62'
                  );
                  console.log("Eamiljs Response:", response);
                  toast.success("Application submitted successfuly");
                  resetForm();
                  setTimeout(()=>{
                    setShowform(false);
                  },1500)
                  
                }
                catch(err){
                  console.log("emailjs error:",err);
                  toast.error("Application failed,please try again")
                }
              }
                
              }
            >{({handleBlur,handleChange,values,errors,handleSubmit,touched,setFieldValue})=><form ref={form} onSubmit={handleSubmit} className='flex flex-col items-center gap-3' >
            <ToastContainer />
           <label className='grid grid-cols-2 items-center gap-4' ><p>First Name* : </p><input type="text" name='firstname' required placeholder='your first name' className='border-2 pl-2' onChange={handleChange} onBlur={handleBlur} value={values.firstname}  /></label>
           {errors.firstname && touched.firstname && <p className='text-red-400'> {errors.firstname} </p>}
            <label className='grid grid-cols-2 items-center gap-4' ><p>Last Name* :</p> <input type="text" name='lastname' required placeholder='your last name' className='border-2 pl-2' onChange={handleChange} onBlur={handleBlur} value={values.lastname}/></label>
            {errors.lastname && touched.lastname && <p className='text-red-400'> {errors.lastname} </p>}
            <label className='grid grid-cols-2 items-center gap-4'>Email* : <input type="text" name='email' required placeholder='your email' className='border-2 pl-2' onChange={handleChange} onBlur={handleBlur} value={values.email} /></label>
            {errors.email && touched.email && <p className='text-red-400'> {errors.email} </p>}
            <label className='grid grid-cols-2 items-center gap-4   ' >Cover Letter : <input type="file" name='coverletter'  placeholder='upload your cover letter' className='border-2 pl-2' onChange={(e)=>{
              const file=e.target.files[0];
              if(file){
                const reader=new FileReader();
                reader.onloadend=()=>{
                  setFieldValue('coverletter',reader.result);//base64 encoded  
                };
                reader.readAsDataURL(file);
              }
            }

            } onBlur={handleBlur} accept='.pdf,.doc,.docx' /></label>
            {errors.coverletter && <p className='text-red-400'> {errors.coverletter} </p>}
            <label className='grid grid-cols-2 items-center gap-4 '>Resume* : <input type="file" name="resume" required placeholder='upload your resume'className='border-2 pl-2 ' onChange={(e)=>{
                  const file=e.target.files[0]
                  if(file){
                    const reader=new FileReader();
                    reader.onloadend=()=>{
                      setFieldValue("resume",reader.result)
                    };
                    reader.readAsDataURL(file)
                  }
            }} onBlur={handleBlur} accept='.pdf,.doc,.docx' /></label>
            {errors.resume && touched.resume && <p className='text-red-400'> {errors.resume} </p>}
            <button type='submit' className='rounded-2xl border-2 p-2 bg-blue-400 hover:bg-blue-500'>Submit</button>
            
          </form>}
          
          </Formik>
          </div>
          </div>
         )}
    </div>
  )
}

export default JobDetails
