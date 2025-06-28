import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
function Movielist() {
  const [movies,setMovies]=useState([])
  const [day_week,setDay_week]=useState(`day`)
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/trending/movie/${day_week}?api_key=04d92954c6870a527f7218fefb16c247`)
    .then(res=>res.json())
    .then(data=>setMovies(data.results))
    .catch(err=>console.log(err))
  },[day_week])

  if(!movies) return <div>Loading...</div>

  return (
    <div>
      <div>
      <select onChange={(e)=>setDay_week(e.target.value)}>
        <option value="day">day</option>
        <option value="week">week</option>
      </select>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:px-4 lg:grid-cols-5 m-4 gap-6'>
        { // --- the link before backdrop_path to get the images
          movies.map((v,i)=>(
            <MovieCard key={i} img={v.poster_path} name={v.title} vote={v.vote_average}/>
          ))
        }
      </div>


    </div>
  )
}

export default Movielist
