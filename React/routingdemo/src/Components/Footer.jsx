import React from 'react'

function Footer() {
  let date=new Date
  let year=date.getFullYear()
  return (
    <footer className='bg-black text-white w-full text-center bottom-0 p-1 '>
       Copyright &copy; {year} Ruha Technologies INC 
    </footer>
  )
}

export default Footer
