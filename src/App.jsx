import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from './pages/Products';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0)

  return (
     
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<Products />} />

      </Routes>
    </Router>
  )
}

export default App
