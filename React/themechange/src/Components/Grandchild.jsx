import React, { useContext } from 'react'
import { MyContext } from '../main'
import { themecontext } from '../App'

function Grandchild() {
  const c=useContext(MyContext)
  const {theme,textColor}=useContext(themecontext)
  
  return (
    <div className='h-[250px] w-[250px] border-2 border-amber-500 p-10 flex justify-center items-center ' style={{backgroundColor:theme,color:textColor}}>
      {c}
    </div>
  )
}

export default Grandchild
