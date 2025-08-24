import logo from "../assets/feiralogo.png";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="mb-3">
              <img src={logo} width="70" height="70" alt="Logo" />
            </h5>
            <p>Produtos frescos diretamente do produtor para sua casa.</p>
            <div className="social-icons mb-3">
              <a href="#" className="text-white me-3"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram fs-5"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter fs-5"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-whatsapp fs-5"></i></a>
            </div>
            <div className="mb-3">
              <h6>Baixe nosso app</h6>
              <div className="apps">
                <a href="#" className="btn btn-outline-light btn-sm"><i className="bi bi-google-play"></i> Play Store</a>
                <a href="#" className="btn btn-outline-light btn-sm"><i className="bi bi-apple"></i> App Store</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <br />
            <h5 className="mb-3">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/index.html" className="text-white text-decoration-none">Início</a></li>
              <li className="mb-2"><a href="../pages/produtos.html" className="text-white text-decoration-none">Produtos</a></li>
              <li className="mb-2"><a href="../pages/faleconosco.html" className="text-white text-decoration-none">Fale Conosco</a></li>
              <li className="mb-2"><a href="../pages/sobrenos.html" className="text-white text-decoration-none">Sobre Nós</a></li>
              <li className="mb-2"><a href="../pages/cadastro.html" className="text-white text-decoration-none">Cadastro/Login</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4">
            <br />
            <h5 className="mb-3">Ajuda</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">FAQ</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Entregas</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Pagamentos</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Trocas e Devoluções</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Contato</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4">
            <h5 className="mb-3">Newsletter</h5>
            <p>Assine para receber ofertas exclusivas e novidades.</p>
            <div className="mb-3">
              <input type="email" className="form-control mb-2" placeholder="Seu e-mail" />
              <button className="btn btn-success w-100">Assinar</button>
            </div>
            <h6>Formas de pagamento</h6>
            <div className="Pagamentos">
              <i className="bi bi-credit-card fs-4"></i>
              <i className="bi bi-paypal fs-4"></i>
              <i className="bi bi-cash-coin fs-4"></i>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-3">
            <p className="mb-0">© 2025 Feira. Todos os direitos reservados.</p>
          </div>
          <div className="col-md-9 text-md-end">
            <a href="#" className="text-white text-decoration-none me-3">Termos de uso</a>
            <a href="#" className="text-white text-decoration-none">Política de privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;