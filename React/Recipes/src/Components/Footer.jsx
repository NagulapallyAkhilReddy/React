import React from 'react'

function Footer() {
  let date= new Date
  let year=date.getFullYear()
  return (
    <div className='bottom-0  text-center font-bold text-white bg-black w-full py-2'>
      <footer>
        This site belongs to A.K.H.I.L &copy; {year}
      </footer>
    </div>
  )
}

export default Footer
