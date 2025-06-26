import React, { useEffect, useState } from 'react'


function RandomQuotes() {
  const [Quote,setQuote]=useState({});
useEffect(()=>{
  fetch('https://dummyjson.com/quotes/random')
  .then(res=>res.json())
  .then(data=>setQuote(data))
  .catch(err=>console.log(err))
},[])
  return (
    <div className='h-screen flex flex-col justify-center items-center overflow-hidden font-bold'>
      <h1>{Quote.quote}</h1>
      <p>- {Quote.author}</p>
    </div>
  )
}

export default RandomQuotes
