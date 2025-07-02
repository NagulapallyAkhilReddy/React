import React from 'react'

function Footer() {
  let date=new Date
  let year=date.getFullYear()
  return (
    <div className='w-full bottom-0 text-center text-white bg-black py-1'>
      &copy; Akhil {year}
    </div>
  )
}

export default Footer
