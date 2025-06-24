import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Everyone 👋 I am Akhil </h1>
      <div className='dragon'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDATX789wruazig0BqhnWbzZ3T75x0jbMZ2Q&s"  alt="Dragon" />
        <p >this is my frist react app</p>


      </div>
    </>
  )
}

export default App
