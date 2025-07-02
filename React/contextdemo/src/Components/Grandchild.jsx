import React, { useContext } from 'react'
import { MyContext } from '../main'
import { themecontext } from '../App'

function Grandchild() {
  const c=useContext(MyContext)
  const theme=useContext(themecontext)
  return (
    <div className='h-[250px] w-[250px] border-2 border-amber-500 p-10 flex justify-center items-center ' style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black' : 'white'}}>
      {c}
    </div>
  )
}

export default Grandchild
