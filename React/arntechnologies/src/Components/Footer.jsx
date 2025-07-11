import React, { useContext } from 'react'
import { themechange } from '../App'
function Footer() {
  let date=new Date
  let year=date.getFullYear()
  const {theme,setTheme}=useContext(themechange)
  return (
    <footer className=' bg-black text-white w-full text-center bottom-0 p-1 '>
      This site belongs to A.R.N &copy; {year}
    </footer>
  )
}

export default Footer
