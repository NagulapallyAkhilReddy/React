import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div className='h-[450px] w-[450px] border-2 border-amber-500 p-10  flex justify-center items-center'>
      <Child />
    </div>
  )
}

export default Parent
