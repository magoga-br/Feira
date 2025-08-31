import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// mesma ordem do HTML original:
import "./css/global.css";
import "./css/styles.css";
import "./css/login.css";   // <- último, para sobrescrever


// só depois os extras
import Header from "./components/Header";
import Footer from "./components/Footer";
import Produtos from "./Pages/Produtos"
import Login from "./Pages/Login";
import Index from "./Pages/Index";
import Cadastro from "./Pages/Cadastro";
import FaleConosco from "./Pages/FaleConosco"
import SobreNos from "./Pages/SobreNos"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/faleConosco" element={<FaleConosco />} />
        <Route path="/sobrenos" element={<SobreNos />} /> 
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;