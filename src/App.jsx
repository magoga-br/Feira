import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Produtos from "./pages/produtos"
import Login from "./pages/Login";
import Index from "./pages/Index";
import SobreNos from "./pages/sobrenos";
import FaleConosco from "./pages/fale-conosco";


function App() {

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
      </Routes>

      <Footer />

    </Router>
  )
}

export default App
