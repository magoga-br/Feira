import React from "react";
import { useState } from "react";

export default function FaleConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    descricao: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      estado: "",
      cidade: "",
      descricao: "",
      assunto: "",
      mensagem: "",
    });
  };

  return (
    <main>
      <div className="container py-5">
        <h1 className="text-center mb-5" >Fale Conosco</h1>

        <div className="row">
          {/* FORMULÁRIO */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="card shadow">
              <div className="card-body p-4">
                <h4 className="mb-4">Envie sua mensagem</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Telefone</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Estado</label>
                      <select
                        className="form-select"
                        id="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Cidade</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Descrição</label>
                      <select
                        className="form-select"
                        id="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="duvida">Dúvidas</option>
                        <option value="sugestao">Sugestões</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Assunto</label>
                      <input
                        type="text"
                        className="form-control"
                        id="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Mensagem</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                      minLength={30}
                      maxLength={500}   // <-- limite aqui
                      ></textarea>
                     <small className="text-muted">
                    {formData.mensagem.length}/500 caracteres
                    </small>
                  </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-success">
                        Enviar Mensagem
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* INFORMAÇÕES DE CONTATO + FAQ */}
          <div className="col-lg-4">
            <div className="card shadow mb-4">
              <div className="card-body p-4 info-contato">
                <h4 className="mb-4">Informações de Contato</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Av. Paulista, 1000 - São Paulo, SP
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-phone me-2"></i>
                    (11) 99415-3563
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-envelope me-2"></i>
                    contato.facfeira@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-clock me-2"></i>
                    Segunda a Sexta: 9h às 18h
                  </li>
                </ul>

                <hr className="my-4" />

                <h5>Siga-nos</h5>
                <div className="social-icons mt-3">
                  <a href="#" className="text-success me-3">
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                  <a href="#" className="text-success me-3">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a href="#" className="text-success me-3">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a href="#" className="text-success">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="card shadow">
              <div className="card-body p-4">
                <h4 className="mb-4">Perguntas Frequentes</h4>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqAccount"
                  >
                    Conta
                  </button>
                  <div className="collapse" id="faqAccount">
                    <div className="card card-body mt-2">
                      <h6>Como criar uma conta?</h6>
                      <p>
                        Clique em "Cadastro/Login" no menu superior e siga as instruções.
                      </p>
                      <h6>Como recuperar minha senha?</h6>
                      <p>
                        Na tela de login, clique em "Esqueceu a senha?" e siga as instruções.
                      </p>
                    </div>
                  </div>

                  <button
                    className="btn btn-outline-success"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqProducts"
                  >
                    Produtos e Serviços
                  </button>
                  <div className="collapse" id="faqProducts">
                    <div className="card card-body mt-2">
                      <h6>Como garantir a qualidade dos produtos?</h6>
                      <p>
                        Todos os produtores passam por um processo de verificação e
                        os produtos são avaliados pelos consumidores.
                      </p>
                      <h6>Qual o prazo de entrega?</h6>
                      <p>Geralmente de 1 a 3 dias úteis.</p>
                    </div>
                  </div>

                  <button
                    className="btn btn-outline-success"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqPolicies"
                  >
                    Políticas e Termos
                  </button>
                  <div className="collapse" id="faqPolicies">
                    <div className="card card-body mt-2">
                      <h6>Como funciona a política de devolução?</h6>
                      <p>
                        Você pode solicitar devolução em até 24 horas após o recebimento.
                      </p>
                      <h6>Como são tratados meus dados pessoais?</h6>
                      <p>De acordo com a LGPD, apenas para melhorar sua experiência.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </main>
  );
}
