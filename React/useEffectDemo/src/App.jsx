
import './App.css'
import Header from './Components/Header'
import Footter from './Components/Footter'
import RandomQuotes from './Components/RandomQuotes'


function App() {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
    <Header />
    <RandomQuotes />
    <Footter />
      
    </div>
  )
}

export default App
