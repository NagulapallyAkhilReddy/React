import React, { useContext } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { themechangeR } from '../App'
import { useState } from 'react'

function Header() {
  const {theme,setTheme}=useContext(themechangeR)
  const [ismenuOpen,setIsmenuOpen]=useState(false);
  return (
  <header className='flex flex-col lg:flex-row text-white text-2xl  w-full justify-center lg:justify-between items-center px-10 py-4' style={{backgroundColor:theme==='light'?'#015f73':'black'}}>
    <div className='flex justify-between w-full lg:w-auto items-center'>
      <h2 className='' > <Link to='/' >Ruha <span className='text-blue-400'>Technologies INC</span></Link></h2>
      <button className='lg:hidden text-2xl' onClick={()=>setIsmenuOpen(!ismenuOpen)}>☰</button>
      </div>
      <nav className={`flex flex-col lg:flex-row text-xl gap-2 lg:gap-4 mt-4 lg:mt-0 ${ismenuOpen?'flex':'hidden'} lg:flex`} >
      <NavLink  to="/" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400 '}>Home</NavLink>
      <NavLink  to="/about" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400 '}>About</NavLink>
      <NavLink  to="/services" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400 '}>Services</NavLink>
      <NavLink  to="/contact" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400 '}>Contact</NavLink>
      <NavLink  to="/careers" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400'}>Careers</NavLink>
      <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>{theme==='light'?'☀️':'🌃'}</button>
      </nav>
      
    </header>
  )
}

export default Header
