import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Produtos from "./pages/Produtos.jsx";
import SobreNos from "./pages/SobreNos.jsx";
import FaleConosco from "./pages/Fale-conosco.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Login from "./pages/Login.jsx";


function App() {

  return (
    <Router>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

    </Router>
  )
}

export default App
