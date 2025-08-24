import React, { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Cadastro = () => {
  const [userType, setUserType] = useState(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    tipoProducao: "",
    tamanhoPropriedade: "",
    principaisProdutos: "",
  });

  // Manipulação dos campos do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Escolha do tipo de usuário
  const escolherTipo = (tipo) => {
    setUserType(tipo);
    setStep(1);
  };

  // Validação e avanço para o próximo passo
  const proximoStep = () => {
    if (!form.nome || !form.email || !form.telefone || !form.senha || !form.confirmarSenha) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }
    setStep(2);
  };

  // Voltar para o passo anterior
  const voltarStep = () => {
    setStep(1);
  };

  // Validação e envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.endereco || !form.cidade || !form.estado || !form.cep) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (userType === "agricultor" && (!form.tipoProducao || !form.tamanhoPropriedade)) {
      alert("Por favor, preencha todos os campos obrigatórios para agricultores.");
      return;
    }
    alert("Cadastro realizado com sucesso! Em breve você receberá um email de confirmação.");
    // Redirecionar para página inicial
    window.location.href = "/";
  };

  return (
    <>
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  {!userType ? (
                    <div id="escolha-perfil">
                      <h1 className="text-center mb-4 fw-bold">Escolha seu perfil</h1>
                      <p className="text-center text-muted mb-4">
                        Selecione como você deseja se cadastrar na plataforma FEIRA
                      </p>
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div
                            className="card h-100 border-0 shadow-sm cursor-pointer"
                            style={{ cursor: "pointer" }}
                            onClick={() => escolherTipo("agricultor")}
                          >
                            <div className="card-body text-center p-4">
                              <div className="rounded-circle bg-success bg-opacity-10 p-3 d-inline-flex mb-3">
                                <i className="fa-solid fa-tractor fs-3"></i>
                              </div>
                              <h3 className="h4 mb-3">Sou Agricultor</h3>
                              <p className="text-muted">
                                Quero vender meus produtos diretamente para os consumidores
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div
                            className="card h-100 border-0 shadow-sm cursor-pointer"
                            style={{ cursor: "pointer" }}
                            onClick={() => escolherTipo("cliente")}
                          >
                            <div className="card-body text-center p-4">
                              <div className="rounded-circle bg-success bg-opacity-10 p-3 d-inline-flex mb-3">
                                <i className="fa-solid fa-basket-shopping fs-3"></i>
                              </div>
                              <h3 className="h4 mb-3">Sou Cliente</h3>
                              <p className="text-muted">
                                Quero comprar produtos frescos diretamente dos agricultores
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form className="form-cadastro" onSubmit={handleSubmit}>
                      <h1 className="text-center mb-4 text-success fw-bold">
                        {userType === "agricultor" ? "Cadastro de Agricultor" : "Cadastro de Cliente"}
                      </h1>
                      {/* Indicador de progresso */}
                      <div className="mb-4">
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: step === 1 ? "50%" : "100%" }}
                            aria-valuenow={step === 1 ? 50 : 100}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                          <small className="text-muted">Informações Pessoais</small>
                          <small className="text-muted">
                            {userType === "agricultor" ? "Endereço & Produção" : "Endereço"}
                          </small>
                        </div>
                      </div>
                      {/* Step 1 */}
                      {step === 1 && (
                        <div id="step-1">
                          <div className="row g-3">
                            <div className="col-12">
                              <label htmlFor="nome" className="form-label">Nome Completo</label>
                              <input type="text" className="form-control" id="nome" name="nome" value={form.nome} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="telefone" className="form-label">Telefone</label>
                              <input type="tel" className="form-control" id="telefone" name="telefone" value={form.telefone} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="senha" className="form-label">Senha</label>
                              <input type="password" className="form-control" id="senha" name="senha" value={form.senha} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha</label>
                              <input type="password" className="form-control" id="confirmarSenha" name="confirmarSenha" value={form.confirmarSenha} onChange={handleChange} required />
                            </div>
                          </div>
                          <div className="d-grid mt-4">
                            <button type="button" className="btn btn-success btn-lg" onClick={proximoStep}>
                              Continuar
                            </button>
                          </div>
                        </div>
                      )}
                      {/* Step 2 */}
                      {step === 2 && (
                        <div id="step-2" className="passo2">
                          <div className="row g-3">
                            <div className="col-12">
                              <label htmlFor="endereco" className="form-label">Endereço</label>
                              <input type="text" className="form-control" id="endereco" name="endereco" value={form.endereco} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="cidade" className="form-label">Cidade</label>
                              <input type="text" className="form-control" id="cidade" name="cidade" value={form.cidade} onChange={handleChange} required />
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="estado" className="form-label">Estado</label>
                              <select className="form-select" id="estado" name="estado" value={form.estado} onChange={handleChange} required>
                                <option value="">Selecione...</option>
                                <option value="AC">AC</option><option value="AL">AL</option><option value="AP">AP</option><option value="AM">AM</option><option value="BA">BA</option><option value="CE">CE</option><option value="DF">DF</option><option value="ES">ES</option><option value="GO">GO</option><option value="MA">MA</option><option value="MT">MT</option><option value="MS">MS</option><option value="MG">MG</option><option value="PA">PA</option><option value="PB">PB</option><option value="PR">PR</option><option value="PE">PE</option><option value="PI">PI</option><option value="RJ">RJ</option><option value="RN">RN</option><option value="RS">RS</option><option value="RO">RO</option><option value="RR">RR</option><option value="SC">SC</option><option value="SP">SP</option><option value="SE">SE</option><option value="TO">TO</option>
                              </select>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="cep" className="form-label">CEP</label>
                              <input type="text" className="form-control" id="cep" name="cep" value={form.cep} onChange={handleChange} required />
                            </div>
                            {/* Campos específicos para agricultores */}
                            {userType === "agricultor" && (
                              <div id="campos-agricultor" className="campos-agricultor">
                                <div className="row g-3">
                                  <div className="col-md-6">
                                    <label htmlFor="tipoProducao" className="form-label">Tipo de Produção</label>
                                    <select className="form-select" id="tipoProducao" name="tipoProducao" value={form.tipoProducao} onChange={handleChange}>
                                      <option value="">Selecione...</option>
                                      <option value="Orgânica">Orgânica</option>
                                      <option value="Convencional">Convencional</option>
                                      <option value="Agroecológica">Agroecológica</option>
                                      <option value="Mista">Mista</option>
                                    </select>
                                  </div>
                                  <div className="col-md-6">
                                    <label htmlFor="tamanhoPropriedade" className="form-label">Tamanho da Propriedade</label>
                                    <select className="form-select" id="tamanhoPropriedade" name="tamanhoPropriedade" value={form.tamanhoPropriedade} onChange={handleChange}>
                                      <option value="">Selecione...</option>
                                      <option value="Pequena (até 4 módulos fiscais)">Pequena (até 4 módulos fiscais)</option>
                                      <option value="Média (4 a 15 módulos fiscais)">Média (4 a 15 módulos fiscais)</option>
                                      <option value="Grande (acima de 15 módulos fiscais)">Grande (acima de 15 módulos fiscais)</option>
                                    </select>
                                  </div>
                                  <div className="col-12">
                                    <label htmlFor="principaisProdutos" className="form-label">Principais Produtos</label>
                                    <textarea className="form-control" id="principaisProdutos" name="principaisProdutos" rows="3" placeholder="Liste seus principais produtos separados por vírgula" value={form.principaisProdutos} onChange={handleChange}></textarea>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="d-flex justify-content-between mt-4">
                            <button type="button" className="btn btn-outline-secondary btn-lg" onClick={voltarStep}>
                              Voltar
                            </button>
                            <button type="submit" className="btn btn-success btn-lg">
                              Finalizar Cadastro
                            </button>
                          </div>
                        </div>
                      )}
                      <div className="text-center mt-4">
                        <p className="text-muted">
                          Já tem uma conta? <a href="/login" className="text-success">Faça login</a>
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cadastro;
