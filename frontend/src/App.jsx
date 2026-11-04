import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> 
    </>
  )
}

export default App
