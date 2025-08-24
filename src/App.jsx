import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Produtos from "./pages/produtos"
import Login from "./pages/Login";
import Index from "./pages/Index";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

    </Router>
  )
}

export default App
