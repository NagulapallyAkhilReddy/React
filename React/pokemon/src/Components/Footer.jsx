import React from 'react'

function Footer() {
  let date=new Date
  let year=date.getFullYear()
  return (
    <footer className='text-white bg-black text-center font-bold bottom-0  w-full'>
      This site belongs to A.K.H.I.L copyrighted &copy; {year}
    </footer>
  )
}

export default Footer
