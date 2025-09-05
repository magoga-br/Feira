import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// mesma ordem do HTML original:
import "./css/global.css";
import "./css/styles.css";
import "./css/login.css";   // <- último, para sobrescrever


// só depois os extras
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Produtos from "./Pages/Produtos.jsx"
import Login from "./Pages/Login.jsx";
import Index from "./Pages/Index.jsx";
import Sobrenos from "./Pages/sobrenos.jsx";
import Cadastro from "./Pages/cadastro.jsx";
import Faleconosco from "./Pages/fale-conosco.jsx"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
         <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/fale-conosco" element={<Faleconosco />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;