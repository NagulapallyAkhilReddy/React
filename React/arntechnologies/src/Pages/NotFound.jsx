import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center'>
     <h1 className='text-center font-bold text-2xl'>hey, there</h1>
     <p className='text-center font-semibold text-xl'>You are on a wrong route, wanna go back to <Link to='/' className='font-light text-blue-400 hover:text-amber-500'>home page</Link></p>
    </div>
  )
}

export default NotFound
