import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


import NotFound from './Pages/NotFound'


function App() {

      const home=React.lazy(()=>import('./Pages/Home'))
      const about=React.lazy(()=>import('./Pages/About'))
      const services=React.lazy(()=>import('./Pages/Services'))
      const contact=React.lazy(()=>import('./Pages/Contact'))
      const service=React.lazy(()=>import('./Pages/Service'))
  return (
    <div className='flex flex-col  min-h-screen '>
      <main className='flex-1 w-full'>
      <Header />
      <React.Suspense fallback={<DotLottieReact
						src='https://lottie.host/3ebe12b1-b2ca-466d-9efb-6b1c3dca64d5/VRgVMGsQrM.lottie'
						loop
						autoplay
					/>}>
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/home" Component={home} />
        <Route path="/about" Component={about} />
        <Route path="/contact" Component={contact} />
        <Route path="/services" Component={services} />
        <Route path='/service/:tjson'  Component={service}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </React.Suspense>
      </main>
      <Footer  />
      
    </div>
  )
} 

export default App
