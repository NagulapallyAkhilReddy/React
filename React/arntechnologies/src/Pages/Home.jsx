import React, { useContext, useEffect, useState } from 'react'
import homecontent from '../homecontent.json'
import webdevelopment from '../ServiceData/webdevelopment.json'
import mobileapp from '../ServiceData/mobileapp.json'
import devops from '../ServiceData/devops.json'
import cybersecurity from'../ServiceData/cybersecurity.json'
import uiux from '../ServiceData/uiux.json'
import itconsulting from '../ServiceData/itconsulting.json'
import { Link, useNavigate } from 'react-router-dom'
import cloud from '../ServiceData/cloud.json'
import { themechange } from '../App'


function Home() {

  const {theme,steTheme}=useContext(themechange)

  const [homedata,setHomedata]=useState(null)
  const naviagte=useNavigate();

  useEffect(()=>{
    setHomedata(homecontent)
  },[])

  if(!homedata) return <div>Loading...</div>
  return (
    <div className='flex flex-col  p-3 ' style={{backgroundColor:theme==='light'?'white':'black'}}>
      <section className='flex flex-col justify-between gap-6 py-4 pb-10'>
       <div style={{color:theme==='light'?'black':'white'}}>
        <h2 className='text-center font-semibold text-2xl' >{homedata.hero.title}</h2>
        <p className='text-center font-semibold text-2xl' >{homedata.hero.subtitle}</p>
       </div>
       <div style={{color:theme==='light'?'black':'white'}}>
        <p className='text-center font-semibold text-2xl'>
        <button  onClick={()=>naviagte('/services')} className='font-semibold text-2xl border-2 rounded-2xl px-2 shadow hover:shadow-2xl border-amber-400 '>{homedata.hero.cta}</button>
        </p>
       </div>
        
      </section>
      <section className='pb-10' style={{color:theme==='light'?'black':'white'}}>
        <p className='text-center'>{homedata.aboutPreview}</p>
      </section>
       <section className='flex flex-col items-center pb-10' style={{color:theme==='light'?'black':'white'}}>
        <h3 className='text-2xl font-extrabold pb-4'>Our Top Services</h3>
        {/* <p>We provide {homedata.topServices.map((v,i)=>(
          <h1 key={i}>{v}</h1>
        ))}</p> */}
       <p className=''> We specialize in delivering tailored solutions across key domains including Web Development, Mobile App Development, UI/UX Design, and Cybersecurity Services.</p>
       <div className=' grid grid-cols-1 md:grid-cols-2  gap-4 p-2 m-6'>
        
          
            <Link to={`/service/${webdevelopment.tjson}`} >
            <div key={webdevelopment.id} className=' flex flex-col items-center justify-start border-2 rounded-3xl overflow-hidden p-4 h-auto min-h-[500px]  ' >
              <img className='h-[300px] w-[300px] rounded-2xl' src={webdevelopment.image} alt={webdevelopment.title} />
              <h2 className='font-bold pb-2 '>{webdevelopment.title}</h2>
              <h3  className='text-center text-xl font-semibold pb-4'>{webdevelopment.shortDescription}</h3>
              <p className='text-center text-xl font-light'>We build scalable websites for startups, agencies, and enterprises looking to establish or enhance their online presence.</p>
            </div>
            </Link>

             <Link to={`/service/${mobileapp.tjson}`} >
            <div key={mobileapp.id} className=' flex flex-col items-center justify-start border-2 rounded-3xl overflow-hidden p-4 h-auto min-h-[500px]' >
              <img className='h-[300px] w-[300px] rounded-2xl' src={mobileapp.image} alt={mobileapp.title} />
              <h2 className='font-bold pb-2 '>{mobileapp.title}</h2>
              <h3  className='text-center text-xl font-semibold pb-4'>{mobileapp.shortDescription}</h3>
              <p className='text-center text-xl font-light'>We develop mobile apps for tech startups, entrepreneurs, and businesses launching app-based platforms.</p>

            </div>
            </Link>

             <Link to={`/service/${uiux.tjson}`} >
            <div key={uiux.id} className=' flex flex-col items-center justify-start border-2 rounded-3xl overflow-hidden p-4 h-auto min-h-[500px]' >
              <img className='h-[300px] w-[300px] rounded-2xl' src={uiux.image} alt={uiux.title} />
              <h2 className='font-bold pb-2 '>{uiux.title}</h2>
              <h3  className='text-center text-xl font-semibold pb-4'>{uiux.shortDescription}</h3>
              <p className='text-center text-xl font-light'>We design intuitive interfaces for startups, SaaS products, mobile apps, and digital businesses seeking exceptional user experience.</p>

            </div>
            </Link>

             <Link to={`/service/${cybersecurity.tjson}`} >
            <div key={cybersecurity.id} className=' flex flex-col items-center justify-start border-2 rounded-3xl overflow-hidden p-4 h-auto min-h-[500px]' >
              <img className='h-[300px] w-[300px] rounded-2xl' src={cybersecurity.image} alt={cybersecurity.title} />
              <h2 className='font-bold pb-2 '>{cybersecurity.title}</h2>
              <h3  className='text-center text-xl font-semibold pb-4'>{cybersecurity.shortDescription}</h3>
              <p className='text-center text-xl font-light'>Our security solutions are tailored for enterprises, e-commerce platforms, and data-sensitive industries like finance and healthcare.</p>

            </div>
            </Link>
      
      </div>
      </section>
       <section className='mx-8 pb-8'style={{color:theme==='light'?'black':'white'}} >
        <h3 className='text-2xl'>Why Choose Us</h3>
         <ul className='list-disc   list-inside text-gray-700 space-y-1 text-lg' style={{color:theme==='light'?'black':'white'}} >{homedata.whyChooseUs.map((v,i)=>(
          <li key={i}>{v}</li>
        ))}</ul>
      </section>
       <section className='flex flex-col justify-center items-center' style={{color:theme==='light'?'black':'white'}}>
        <p className='pb-4'>{homedata.ctaSection.text}</p>
        <button className='border-amber-300 rounded-2xl border-2 px-2' onClick={()=>naviagte('/contact')}>{homedata.ctaSection.button }</button>
      </section>
      

    </div>
  )
}

export default Home
