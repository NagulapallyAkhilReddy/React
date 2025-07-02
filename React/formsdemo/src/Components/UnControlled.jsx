import React, { useRef } from 'react'
import { motion } from "motion/react"
import { ToastContainer, toast } from 'react-toastify';


function UnControlled() {
  const nameref=useRef()
  const emailref=useRef()
  const messageref=useRef()
  const handleForm =e=>{
    e.preventDefault();
    toast("form submitted sucessfully")
    console.log(nameref.current.value,emailref.current.value,messageref.current.value)
    nameref.current.value=''
    emailref.current.value=''
    messageref.current.value=''
  }
  return (
    <div className="flex justify-center items-center h-screen  ">
      <motion.form initial={{scale:0}} animate={{ rotate:5, scale:1}} onSubmit={handleForm} className='flex flex-col  gap-2 p-4 bg-amber-500 rounded-2xl' >
        <div>
          <ToastContainer />
          <input type="text" name='name' ref={nameref} placeholder='Your name' required className='border-2 px-3 bg-white rounded-2xl'/>
        </div>
        
        <div>
          <input type="email" name='email' ref={emailref}  placeholder='Your email' required className='border-2 px-3 bg-white rounded-2xl' />
        </div>
        
        <div>
          <textarea type="message" name='message' ref={messageref} placeholder='Your message'  required rows={4} className='border-2 px-3 bg-white rounded-2xl w-full'/>
        </div>
        
        
        
       <div className='flex justify-center'>
        <button type='submit' className='bg-black text-white rounded-2xl px-4 w-fit '>Send</button>
        </div>
      </motion.form>
    </div>
  )
}

export default UnControlled
