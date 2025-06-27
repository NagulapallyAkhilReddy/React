import React from 'react'

function MovieCard({img,name,vote}) {
  return (
    <div className='bg-black flex flex-col justify-center items-center'>
      <img className='object-cover' style={{height:'300px',width:'200px'}} src={`https://image.tmdb.org/t/p/original/${img}`} alt={name} />
      <h2 className='font-bold text-orange-50'>{name}</h2>
      <button className='p-2 rounded-full bg-amber-300 '>{(vote*10).toFixed(1)}</button>
    </div>
  )
}

export default MovieCard
