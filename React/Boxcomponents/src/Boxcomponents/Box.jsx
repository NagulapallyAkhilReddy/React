import React from 'react'

function Box(props) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Box
