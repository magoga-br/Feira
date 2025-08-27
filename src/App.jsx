import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Produtos from "./pages/produtos";
import SobreNos from "./pages/sobrenos";
import FaleConosco from "./pages/faleConosco";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/loginpage";

export default function App() {

  return (
    <Router>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

    </Router>
  )
}

