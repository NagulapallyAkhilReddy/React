import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={()=>(props.fun("Akhil"))}>know the user</button>
    </div>
  )
}

export default Child
