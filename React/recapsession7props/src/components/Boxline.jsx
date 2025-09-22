import React from 'react'
import Box from './Box'

function Boxline(props) {
  
  return (
    <div>
      {
      props.boxvalues.map((v,i)=>(
        <Box title= {v.title}/>

      ) )

      
      }
    </div>
  )
}

export default Boxline
