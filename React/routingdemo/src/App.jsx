import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import NotFound from './Pages/NotFound'
import { createContext } from 'react';
 export  const themechangeR=createContext();




function App() {

  const [theme,setTheme]=useState('dark')

      const Home=React.lazy(()=>import('./Pages/Home'))
      const About=React.lazy(()=>import('./Pages/About'))
      const Services=React.lazy(()=>import('./Pages/Services'))
      const Contact=React.lazy(()=>import('./Pages/Contact'))
      const Service=React.lazy(()=>import('./Pages/Service'))
      const Careers=React.lazy(()=>import('./Pages/Careers'))
      const JobDetails=React.lazy(()=>import('./Pages/JobDetails'))
  return (
    <themechangeR.Provider value={{theme,setTheme}} >
    <div className='flex flex-col  min-h-screen '>
      <main className='flex-1 w-full'>
      <Header />
      <React.Suspense fallback={<DotLottieReact
						src='https://lottie.host/3ebe12b1-b2ca-466d-9efb-6b1c3dca64d5/VRgVMGsQrM.lottie'
						loop
						autoplay
					/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path='/service/:tjson'  element={<Service />}/>
        <Route path='/careers' element={<Careers/>} >
           <Route path={`/careers/jobdetails/:id`} element={<JobDetails/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </React.Suspense>
      </main>
      <Footer  />
     
      
    </div>
     </themechangeR.Provider>
  )
} 

export default App
