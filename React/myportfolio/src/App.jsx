import React from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
