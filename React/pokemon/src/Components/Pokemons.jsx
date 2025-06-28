import React, { useEffect, useState } from 'react'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Pokemons() {

  const [pokemonsdata,setPokemonsdata]=useState([])
  const [loading,setLoading] =useState(true)

  const fetchData=async ()=>{
    const res=await fetch('https://pokeapi.co/api/v2/pokemon?limit=40')
    const data= await res.json()
    setPokemonsdata(data.results)
    setLoading(false)
  }


  useEffect(()=>{
    setTimeout(()=>fetchData(),3000)
  },[])

  return (
    <div>
      <p>{loading && ( (
    <DotLottieReact
      src="https://lottie.host/00407928-27f8-443a-a9de-ac574b41d5ec/Q0zxwMF592.lottie"
      loop
      autoplay
    />
  ) ) }</p>

     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 ' >
      {
        pokemonsdata.map((v,i)=>(
          <p key={i} className=' font-bold p-6 rounded-2xl border-2 shadow shadow-gray hover:shadow-2xl  ' > {v.name} </p>
        ))
      }
     </div>
      
    </div>
  )
}

export default Pokemons
