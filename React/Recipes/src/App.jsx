import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Dishes from './Components/Dishes'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Dishes />
      <Footer className='mt-auto' />
    </div>
  )
}

export default App
