import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Router, Routes } from 'react-router-dom'

import NotFound from './Pages/NotFound'


function App() {
  const home=React.lazy(()=>import('./Pages/Home'))
  const about=React.lazy(()=>import('./Pages/About'))
  const projects=React.lazy(()=>import('./Pages/Projects'))
  const contact=React.lazy(()=>import('./Pages/Contact'))
  const child1=React.lazy(()=>import('./Pages/Child1'))
  const child2=React.lazy(()=>import('./Pages/Child2'))

  return (
    <div className='flex flex-col min-h-screen' >
      <main className=' flex-1 w-full'>
      <Header />
      <Routes>
        <Route path="/" element={home} />
        <Route path='/home' element={home} >
          
            <Route path='/home/child1' element={child1} />,
            <Route path='/home/child2' element={child2} />
          
        </Route>
        <Route path='/about' element={about}/>
        <Route path='/projects' element={projects} />
        <Route path='/contact' element={contact} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
