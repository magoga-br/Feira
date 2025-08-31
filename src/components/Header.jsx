import { Link } from "react-router-dom";
import logo from "../assets/feiralogo.png"; // Importa a imagem corretamente

function Header() {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo da Feira"
              height="100"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/produtos">Produtos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobrenos">Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/FaleConosco">Fale Conosco</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-success text-white ms-2" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;