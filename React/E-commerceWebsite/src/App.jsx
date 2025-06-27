import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Main from "./Components/Main"
import './App.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen" >
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
