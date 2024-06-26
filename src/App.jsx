import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Coin from "./pages/Coin"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="text-white min-h-screen bg-custom-gradient">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coin/:coinId" element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
