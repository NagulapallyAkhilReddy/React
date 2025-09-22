  import React, { useEffect, useState } from 'react'
  import careerscontent from '../CareersContent/careerscontent.json'
  import {motion,AnimatePresence} from 'framer-motion'
  import { Link, Outlet, useNavigate } from 'react-router-dom'


  function Careers() {
    const [careersdata,setCareersdata]=useState({})
    const [index,setIndex]=useState(0)
    const [visibility,setVisisbility]=useState(2)
    const [initial,setInitial]=useState(0)
    const navigate=useNavigate();
    
    
    useEffect(()=>{
      setCareersdata(careerscontent)
      if(careerscontent.values.length>0){
        navigate('jobdetails/0')
      }
      const interval=setInterval(()=>{
        if(careerscontent.values && careerscontent.values.length>0){
          setIndex((prev)=>(prev+1)%careerscontent.values.length)
        }


      },2000)

      return ()=>clearInterval(interval)
      
    },[])
      
    console.log(careersdata)
    
    return (
      
        <div className='flex flex-col items-center justify-center min-h-screen p-2'>
        <section className='flex flex-col  items-center '>
          <h1  className='font-bold text-3xl m-3'>{careersdata?.intro?.headline}</h1>
          <h2 className='font-semibold text-2xl'>{careersdata?.intro?.subheadline}</h2>
          <h3 className='font-semibold text-xl mb-6'>{careersdata?.intro?.subheadline2}</h3>

          <p 
          className='text-2xl font-semibold'>We value <AnimatePresence mode="wait"> <motion.span key={index} 
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:0.5 }}  className='text-blue-400 font-bold'>"{careersdata?.values?.[index]}"</motion.span></AnimatePresence></p>
          
        </section>
        
        <h1 className='m-3'>If you believe that you are a good fit for any of these roles below, please let us know</h1>
        <section className='flex flex-col md:flex-row gap-4 w-full px-4'>
          
        <section className='flex flex-row justify-center items-center  md:flex-col'>
         <div> {initial>0 && (
            <button onClick={()=>{
              setInitial(prev=>prev-2);
              setVisisbility(prev=>prev-2);
            }} className='flex justify-center'><p className='justify-center hidden md:flex'>⬆️</p><p className='justify-center flex md:hidden'>⬅️</p></button>
          )}</div>
          <div className='flex flex-row md:flex-col'>
          {careersdata?.openings?.slice(initial,visibility).map((v,i)=>(
          <Link  key={v.id} to={`/careers/jobdetails/${v.id}`} >
            <button   className='border-2 rounded-2xl m-1  md:w-[150px]  h-[100px] w-auto '>
            <h1>{v.title}</h1>
            
            </button>
            </Link>
           
        
        ))}
        </div>
        <div >
         {visibility< careersdata.openings?.length &&(
              <button className='flex justify-center items-center' onClick={()=>{setVisisbility(prev=>prev+2);
                setInitial(prev=>prev+2);}
              }>
              <p className=' hidden md:flex'>⬇️</p> <p className=' flex md:hidden'>➡️</p>
              </button>
            )}
            </div>
        </section>
        <section>
          <Outlet />
        </section>
        </section>
        
      </div>
    
      
    )
  }

  export default Careers
