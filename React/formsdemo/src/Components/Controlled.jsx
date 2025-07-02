import React from 'react'
import { useState } from 'react'
import { motion } from "motion/react"
import { ToastContainer, toast } from 'react-toastify';

function Controlled() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('') 
  const [message,setMessage]=useState('')
  const [errors,setErrors] =useState({})

 const handleForm = (e)=>{
    e.preventDefault()

    if(name.trim()==''){
      setErrors({...errors,nameError:"please enter name"})
      toast("Error,please enter your name")
    }
    else if(!email.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)){
      setErrors({...errors,emailError:"type a valid email"})
      toast("Error,type a valid email")
    }
    else if(message.trim()==''){
      setErrors({...errors,messageError:"you did not type any message"})
      toast("Error,you did not type any message")
    }
    else{
      setErrors({})
      toast("form submitteed successfully")
      // fetch('url',{
      //   method:'POST',
      //   body:{
      //     name:name,
      //     email:email,
      //     message:message
      //   }
      // }
      // )
      console.log(name,email,message)
      setEmail('')
      setMessage('')
      setName('')
    }

  }

  return (
    <div className="flex justify-center items-center h-screen  ">
      <motion.form initial={{scale:0}} animate={{ rotate:5, scale:1}} onSubmit={handleForm} className='flex flex-col  gap-2 p-4 bg-amber-500 rounded-2xl' >
        <div>
          <ToastContainer />
          <input type="text" name='name' value={name} placeholder='Your name' onChange={(e)=>setName(e.target.value)} required className='border-2 px-3 bg-white rounded-2xl'/>
        </div>
        {errors.nameError && (errors.nameError)}
        <div>
          <input type="email" name='email' value={email}  placeholder='Your email' onChange={e=>setEmail(e.target.value)} required className='border-2 px-3 bg-white rounded-2xl' />
        </div>
        {errors.emailError &&(errors.emailError)}
        <div>
          <textarea type="message" name='message' value={message} placeholder='Your message' onChange={e=>setMessage(e.target.value)} required rows={4} className='border-2 px-3 bg-white rounded-2xl w-full'/>
        </div>
        {errors.messageError && (errors.messageError)}
        
        
       <div className='flex justify-center'>
        <button type='submit' className='bg-black text-white rounded-2xl px-4 w-fit '>Send</button>
        </div>
      </motion.form>
    </div>
  )
}

export default Controlled
