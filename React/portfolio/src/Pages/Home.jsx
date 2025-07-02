import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex gap-2'>
      This is Homme Page
      <div  className='flex flex-col'>

        <button className='text-black text-center border-e-amber-300 border-r-2' >
           <Link to='/home/child1'>Child1</Link>
        </button>
         <button>
            <Link to='/home/child2'>Child2</Link>
         </button>
        
      
      </div>
       <Outlet />
    </div>
  )
}

export default Home
