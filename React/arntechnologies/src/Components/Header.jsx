import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { themechange } from '../App'
import { NavLink } from 'react-router-dom'
function Header() {

  const {theme,setTheme}=useContext(themechange)

  return (
   
  <header className='flex flex-col lg:flex-row text-white text-2xl  w-full justify-center lg:justify-between items-center px-10 py-4' style={{backgroundColor:theme=='light'? '#015f73':'black'}}>
      <h2 className='' > <Link to='/' >ARN <span className='text-blue-400'>Technologies INC</span></Link></h2>
      <nav className='flex flex-col lg:flex-row text-xl gap-2 lg:gap-4' >
      <NavLink  to="/" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400 transition-all ease-in-out'}>Home</NavLink>
      <NavLink  to="/about" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400 transition-all ease-in-out'}>About</NavLink>
      <NavLink  to="/services" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400 transition-all ease-in-out'}>Services</NavLink>
      <NavLink  to="/contact" className={({isActive})=>isActive?'text-blue-400':'hover:text-blue-400 transition-all ease-in-out'}>Contact</NavLink>
      <button onClick={()=>setTheme(theme==='light'?'dark':'light')} className=' px-1 rounded-2xl' style={{ color:theme==='light'?'white':'white'  }}>{theme==='light'?'☀️':'🌃'}</button>
      </nav>
      
    </header>
    
  )
}

export default Header
