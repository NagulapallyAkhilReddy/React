import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
  <header className='flex flex-col lg:flex-row text-white text-2xl  w-full justify-center lg:justify-between items-center px-10 py-4' style={{backgroundColor:'#015f73'}}>
      <h2 className='' > <Link to='/' >Ruha <span className='text-blue-400'>Technologies INC</span></Link></h2>
      <nav className='flex flex-col lg:flex-row text-xl gap-2 lg:gap-4' >
      <Link  to="/" className='hover:text-blue-400 transition-all ease-in-out'>Home</Link>
      <Link  to="/about" className='hover:text-blue-400 transition-all ease-in-out'>About</Link>
      <Link  to="/services" className='hover:text-blue-400 transition-all ease-in-out'>Services</Link>
      <Link  to="/contact" className='hover:text-blue-400 transition-all ease-in-out'>Contact</Link>
      </nav>
      
    </header>
  )
}

export default Header
