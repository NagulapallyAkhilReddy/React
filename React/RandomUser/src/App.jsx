import Header from "./Components/Header"
import Footer from "./Components/Footer"
import RandomUser from "./Components/RandomUser"
import './App.css'
function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <RandomUser />
      <Footer />
    </div>
  )
}

export default App
