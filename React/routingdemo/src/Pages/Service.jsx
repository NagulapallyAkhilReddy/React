import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import webdevelopment from '../ServiceData/webdevelopment.json'
import mobileapp from '../ServiceData/mobileapp.json'
import devops from '../ServiceData/devops.json'
import uiux from '../ServiceData/uiux.json'
import cloud from '../ServiceData/cloud.json'
import cybersecurity from'../ServiceData/cybersecurity.json'
import digitalmarketing from '../ServiceData/digitalmarketing.json'
import itconsulting from '../ServiceData/itconsulting.json'
import ecommerce from '../ServiceData/ecommerce.json'
import { Link } from 'react-router-dom'

const serviceMap={
  webdevelopment,
  mobileapp,
  devops,
  uiux,
  cloud,
  cybersecurity,
  digitalmarketing,
  itconsulting,
  ecommerce
}

function Service() {

  const [servicedata,setServicedata]=useState(null)
  const {tjson}=useParams()
  console.log(tjson)
  const navigate=useNavigate()

 

  useEffect(()=>{
    const data=serviceMap[tjson];
    if(!data){
      navigate('/*')
    }
    else{
      setServicedata(data)
    }
  },[tjson,navigate])

  if(!servicedata) return <div>Loading....</div>

  return (
   <div className='flex flex-col lg:flex-row justify-between gap-2 m-2' >
    <div className='flex justify-center items-center '>
      <img className='w-full max-w-[300px] lg:w-[300px] h-auto object-cover rounded-lg shadow-md' src={servicedata.image} alt={servicedata.title} />
      </div>
    <div className='flex flex-col justify-center items-center relative'>
      
      <div className=' flex flex-col  justify-center items-center'>
        <div className='m-6'>
        <h2 className='text-center font-bold py-6'>{servicedata.title}</h2>
        <p className='text-center pb-6 font-medium'>{servicedata.shortDescription}</p>
        <p className='text-center font-light pb-2'>{servicedata.detailedDescription}</p>
        <p className='text-center font-light pb-2'>{servicedata.whyChooseUs}</p>
        <p className='text-center font-light pb-2'> We take care of{" "}
           {servicedata.features.map((f,i)=>(
            <span key={i}>
              {f}
              {i !==servicedata.features.length-1? ", ":"."}
            </span>
        ))}</p>
        <p className='text-center font-light pb-2'> {servicedata.targetAudience}</p>
        
        </div>
        
        <button onClick={()=>navigate('/contact')} className='  border-2 border-amber-300 font-bold rounded-2xl px-2 hover:border-red-300 mb-9'>Contact Us</button>
         
        </div>
      
      
    </div>
    
    
    </div>
  )
  
}

export default Service
