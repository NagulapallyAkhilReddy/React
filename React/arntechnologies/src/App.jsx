import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import NotFound from './Pages/NotFound'


function App() {

    const Home=React.lazy(()=>import('./Pages/Home'))
    const About=React.lazy(()=>import('./Pages/About'))
    const Services=React.lazy(()=>import('./Pages/Services'))
    const Contact=React.lazy(()=>import('./Pages/Contact'))
    const Service=React.lazy(()=>import('./Pages/Service'))
    // const child1=React.lazy(()=>import('./Pages/Child1'))
    // const child2=React.lazy(()=>import('./Pages/Child2'))
  return (
    <div className='flex flex-col  min-h-screen '>
      <main className='flex-1 w-full'>
      <Header />
      <React.Suspense fallback={<DotLottieReact
      src="https://lottie.host/00407928-27f8-443a-a9de-ac574b41d5ec/Q0zxwMF592.lottie"
      loop
      autoplay
    />}>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/home" element={<Home /> }  />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/services" element={<Services />} />
        <Route path='/service/:tjson' element={<Service/> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </React.Suspense>
      </main>
      <Footer  />
      
    </div>
  )
} 

export default App
