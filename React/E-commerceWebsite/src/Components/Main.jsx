import { useEffect, useState } from "react"
import MainCard from "./MainCard"


function Main() {
  const [products,setProducts]=useState([])
  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(data=>setProducts(data))
  //   .catch(err=>console.log(err))
  // })

  const [catg,setCatg]=useState('electronics')
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${catg}`)
    .then(res=>res.json())
    .then(data=>setProducts(data))
    .catch(err=>console.log(err))
  },[catg])

  if(!products) return <div>Loading...</div>

  return (
    <div className='flex '>
      <div className="flex flex-col gap-2 justify-center items-center ">
        <button onClick={()=>setCatg('electronics')}>electonics</button>
        <button onClick={()=>setCatg("men's clothing")}>men's clothing</button>
        <button onClick={()=>setCatg("jewelery")}>jewelery</button>
        <button onClick={()=>setCatg("women's clothing")}>women's clothing</button>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 ">
      {
        products.map((v,i)=>(
          <MainCard key={i} title={v.title} price={v.price} desc={v.description} img={v.image} rating={v.rating.rate} />
        ))
        
      }
      
      </div>
    </div>
  )
}

export default Main
