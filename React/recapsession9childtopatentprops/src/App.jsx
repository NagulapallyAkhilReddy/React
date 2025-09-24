import React from 'react'
import Child from './components/Child'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  function sayhello(user){
    console.log("hey "+user)
  }
  return (
    <div>
      <Header />
      <Child fun={sayhello} />
      <Footer />
    </div>
  )
}

export default App
