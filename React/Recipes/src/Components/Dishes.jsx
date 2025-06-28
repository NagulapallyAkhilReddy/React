import { useEffect, useState } from "react"
import Dish from "./Dish"
import axios from 'axios';
function Dishes() {
 const [recipes,setRecipes]=useState([])
 async function fetchData(){
  try{
  const res=await axios('https://dummyjson.com/recipes')
  setRecipes(res.data.recipes)
  console.log(res)
  }
  catch(err){
    console.log(err)
  }
 }
 useEffect(()=>{
  fetchData();
 },[])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center mx-10 my-10">
      {
        recipes.map((v,i)=>(
          <Dish key={i}  name={v.name} ingredients={[v.ingredients]} img={v.image} instructions={v.instructions} preptime={v.prepTimeMinutes} />

        ))
      }
    </div>
  )
}

export default Dishes
