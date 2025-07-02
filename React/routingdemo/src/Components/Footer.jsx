import React from 'react'

function Footer() {
  let date=new Date
  let year=date.getFullYear()
  return (
    <footer className='bg-black text-white w-full text-center bottom-0 p-1 '>
      This site belongs to R.U.H.A @ T.E.C.H.N.O.L.O.G.I.E.S copyrighted&copy; {year}
    </footer>
  )
}

export default Footer
