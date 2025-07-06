  import React, { useContext, useEffect, useState } from 'react'
  import Service from './Service'
  import { Link } from 'react-router-dom'
  import servicesdata from '../ServicesData/servicesdata.json'
  import { themechangeR } from '../App'
  function Services() {

    const {theme,setTheme}=useContext(themechangeR)
    const [serviceslist,setServicesList]=useState([])

    useEffect(()=>{
      // fetch('/Services/services.json')
      // .then(res=>res.json())
      // .then(data=>setServicesList(data))
      // .catch(err=>console.log(err))
      setServicesList(servicesdata)
    },[])
    return (
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6' style={{backgroundColor:theme==='light'?'white':'black', color:theme==='light'?'black':'white'}}>
        {
          serviceslist.map((v,i)=>(
            <Link key={i} to={`/service/${v.tjson}`} ><div key={v.id} className=' flex flex-col justify-center items-center border-2 rounded-3xl overflow-hidden h-[400px]' >
              <img className=' w-full max-w-[300px] lg:w-[300px] lg:h-[250px] h-auto object-cover rounded-2xl p-2 ' src={v.image} alt={v.title} />
              <h2 className='font-bold pb-2 '>{v.title}</h2>
              <p  className='text-center text-xl font-light px-2'>{v.shortDescription}</p>
            </div>
            </Link>
          ))
        }
      </div>
    )
  }

  export default Services
