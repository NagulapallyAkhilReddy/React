import React from 'react'
import Boxline from './components/Boxline'

function App() {
  const box_values=[
    {
      title:"box1"
    },
    {
      title:"box2"
    },
    {
      title:"box3"
    }
  ]
  return (
    <div>
      <Boxline boxvalues={box_values}/>
    </div>
  )
}

export default App
