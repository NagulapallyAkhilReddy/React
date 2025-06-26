import React from 'react'
import Box from './Box'
function BoxLine() {
  const boxArray=[{title:"Akhil"}, {title : "Reddy"}, {title : "Nagulapally"}]
  return (
    <div>
    {
     boxArray.map((v,i) => (
      <Box title= {v.title}/>
     ))
    }
    </div>
  )
}

export default BoxLine
