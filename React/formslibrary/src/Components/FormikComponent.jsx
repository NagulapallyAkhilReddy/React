import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"


function FormikComponent() {
  let initialvalues={
    name:'',
    email:'',
    password:'',
    message:''
  }
  const SignupSchema=Yup.object().shape({
    name:Yup.string().min(1,"minimum 1 character required").required("required"),
    email:Yup.string().email("Invalid email").required("required"),
    password:Yup.string().min(8,"minimum 8 characters required").required("required"),
    message:Yup.string().min(1,"minimum 1 character required").required("required")
  })
  return (
    <div>
      <h1>This is a basic form</h1>
      <Formik 
      initialValues={initialvalues}
      validationSchema={SignupSchema}
      onSubmit={(values,{resetForm})=>{
        console.log(values.name,values.email,values.message,values.password);
        resetForm();
       
      }}>
      {({handleChange,values,handleBlur,handleSubmit,errors,touched})=>(
        <form  onSubmit={handleSubmit}>
          <div>
          <input type="text" name="name" placeholder='enter your name' onChange={handleChange}
          onBlur={handleBlur} value={values.name} />
          {errors.name && touched.name && ( <p className='text-red-500'>{errors.name}</p> )}
          </div>
          <div>
          <input type="email" name="email" placeholder='enter your email' onChange={handleChange}
          onBlur={handleBlur} value={values.email} />
          {errors.email && touched.email && ( <p className='text-red-500'>{errors.email}</p> )}
          </div>
          <div>
          <input type="text" name="password" placeholder='enter your password' onChange={handleChange}
          onBlur={handleBlur} value={values.password} />
          {errors.password && touched.password && ( <p className='text-red-500'>{errors.password}</p> )}
          </div>
          <div>
          <input type="text" name="message" placeholder='enter your message' onChange={handleChange}
          onBlur={handleBlur} value={values.message} />
          {errors.message && touched.message && ( <p className='text-red-500'>{errors.message}</p> )}
          </div>
          <div>
            <button type='submit'>
              submit
            </button>
            </div>
        </form>
       
      )}
       </Formik>
    </div>
  )
}

export default FormikComponent
