import React from 'react'
import Controlled from './Components/Controlled'
import UnControlled from './Components/UnControlled'

function App() {
  return (
    <div className='flex gap-2 justify-center'>
      <Controlled />
      <UnControlled />
    </div>
  )
}

export default App
