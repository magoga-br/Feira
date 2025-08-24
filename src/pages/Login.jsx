import React, { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const fazerLogin = (event) => {
    event.preventDefault();
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert("Login realizado com sucesso!");
    window.location.href = "index.html";
  };

  return (
    // <- aqui entra o wrapper
    <div className="page-login">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h1 className="text-center mb-4 text-success fw-bold">
                  Entrar na FEIRA
                </h1>
                <p className="text-center text-muted mb-4">
                  Acesse sua conta para gerenciar seus produtos ou fazer pedidos
                </p>

                <form id="login-form" onSubmit={fazerLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input
                      type="password"
                      className="form-control"
                      id="senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="lembrar"
                        checked={lembrar}
                        onChange={(e) => setLembrar(e.target.checked)}
                      />
                      <label className="form-check-label" htmlFor="lembrar">
                        Lembrar-me
                      </label>
                    </div>
                    <a href="#" className="text-success">Esqueceu a senha?</a>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-lg">
                      Entrar
                    </button>
                  </div>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted">
                    Não tem uma conta?{" "}
                    <a href="cadastro.html" className="text-success">
                      Cadastre-se
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Login;
