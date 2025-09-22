import React, { useContext, useEffect, useState } from 'react'
import aboutcontent from '../aboutcontent.json'
import { useNavigate } from 'react-router-dom'
import { themechangeR } from '../App'
function About() {

  const {theme,setTheme}=useContext(themechangeR)

  const [aboutdata,setAboutdata]=useState(null)
  const navigate=useNavigate();

  useEffect(()=>{
    setAboutdata(aboutcontent)
  },[])

  if(!aboutdata) return <div>Loading...</div>

  return (
    <div className='flex flex-col   min-h-screen justify-center    p-3' style={{backgroundColor:theme==='light'?'white':'black', color:theme==='light'?'black':'white'}}>
     <section className='pb-6'>
      <h1 className='text-center font-bold  text-3xl'>About Us</h1>
      <h1 className='text-center font-semibold  text-2xl'>We blend design, technology, and strategy to help businesses bring their digital vision to life</h1>
      <p className='text-center text-xl '>— with precision, creativity, and purpose</p>
     </section>
     <section className='pb-4'>
      <h3 className='text-2xl text-center'>Our mission is to help businesses succeed by delivering solutions that are not only technically robust, but also strategically aligned with their long-term goals.</h3>
     </section>
     <section className='pb-6'>
      <p className='font-light text-center'> Our <span className='font-medium text-xl'> vision  </span>is {aboutdata.vision}</p>
     </section>
     <section className='m-4'>
      <h1 className='text-center font-bold text-3xl pb-3'>Our Approach</h1>
      <h2 className='text-2xl font-semibold pb-3'>We follow a clear, collaborative approach to ensure every solution is strategically sound, user-focused, and ready for real-world impact</h2>
      <h3 className='font-semibold text-xl pb-6'>The Approach : </h3>
      {aboutdata.process.map((v,i)=>(
        <div className='pb-3' key={i}>
        <h3 className='font-bold'>{v.step}:</h3>
        <p >{v.description}</p>
        </div>
      ))}
     </section>
     <section className='mx-6 pb-6'>
      <h2 className='font-bold text-center text-xl'>Our Core Values</h2>
      {aboutdata.coreValues.map((v,i)=>(
        <ul key={i} className='font-serif' >
          <li  className='list-disc list-inside text-gray-700' style={{color:theme==='light'?'black':'white'}}>
          {v}
          </li>
          
        </ul>
      ))}
     </section>
     <section>
      <h3 className='text-center'>As we grow, our mission stays the same: to empower businesses with technology that moves them forward. We're excited about what’s ahead</h3>
      <h3 className='text-center pb-3'>— and we’d love to be part of your journey.</h3>

      <p className='text-center'>Let’s turn ideas into outcomes. <button className='text-blue-500 hover:font-bold '  onClick={()=>navigate('/contact')}>Contact us</button> to explore how we can work together.</p>
     </section>
     
      
    </div>
  )
}

export default About
