import React from 'react'
import Grandchild from './Grandchild'

function Child() {
  return (
    <div className='h-[350px] w-[350px] border-2 border-amber-500 p-10 flex justify-center items-center '>
      <Grandchild />
    </div>
  )
}

export default Child
