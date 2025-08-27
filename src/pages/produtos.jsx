import morango from "/public/images/strawberry.jpg";
import batata from "/public/images/potato.jpg"
import abobora from "/public/images/pumpkin.jpg"
import peanut from "/public/images/peanut.jpg"
import endive from "/public/images/endive.jpg"
import banana from "/public/images/banana.jpg"
import tomato from "/public/images/tomato.jpg"
import broccoli from "/public/images/broccoli.jpg"
import pineapple from "/public/images/pineapple.jpg"
import lettuce from "/public/images/lettuce.jpg"
import beetroot from "/public/images/beetroot.jpg"
import cucumber from "/public/images/cucumber.jpg"

export default function Produtos() {
  return (
  <div>
      <div className="container-fluid">
        <div className="row">
          {/* Barra lateral */}
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12 barra">
            <div className="produtos">
              <h1>Produtos</h1>
            </div>

            <div className="categorias">
              <br />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Frutas</p>
              <div className="frutas filtro">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pesquisar.."
                  style={{ marginBottom: "10px" }}
                />
                <span>
                  <input type="checkbox" name="Frutas" value="Morango" />
                  <label>Morango (10)</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Frutas" value="Laranja" />
                  <label>Laranja (05)</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Frutas" value="Banana" />
                  <label>Banana (15)</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Frutas" value="Maracujá" />
                  <label>Maracujá (03)</label>
                </span>
                <br />
              </div>

              <br />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Legumes</p>
              <div className="legumes filtro">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pesquisar.."
                  style={{ marginBottom: "10px" }}
                />
                <span>
                  <input type="checkbox" name="Legumes" value="Batata" />
                  <label>Batata (17)</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Legumes" value="Alface" />
                  <label>Alface (08)</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Legumes" value="Escarola" />
                  <label>Escarola (13)</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Legumes" value="Pepino" />
                  <label>Pepino (03)</label>
                </span>
                <br />
              </div>

              <br />

                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Agrotóxicos</p>
              <div className="agrotoxicos filtro">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pesquisar.."
                  style={{ marginBottom: "10px" }}
                />
                <span>
                  <input type="checkbox" name="Agrotóxicos" value="Sim" />
                  <label>Sim</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Agrotóxicos" value="Não" />
                  <label>Não</label>
                </span>
                <br />
              </div>

              <br />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Região</p>
              <div className="regiao filtro">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pesquisar.."
                  style={{ marginBottom: "10px" }}
                />
                <span>
                  <input type="checkbox" name="Região" value="Norte" />
                  <label>Norte</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Região" value="Nordeste" />
                  <label>Nordeste</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Região" value="Centro-Oeste" />
                  <label>Centro-Oeste</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Região" value="Sudeste" />
                  <label>Sudeste</label>
                </span>
                <br />
                <span>
                  <input type="checkbox" name="Região" value="Sul" />
                  <label>Sul</label>
                </span>
                <br />
              </div>
            </div>
          </div>
     


                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-12">
                    <div className="row g-4">
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={morango} alt="Morangos em pilha"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Cesta de Morangos</h5>
                                    <p className="card-text">Doces, fresquinhos e colhidos com carinho! Morangos 100% orgânicos, ideais para sobremesas ou lanches saudáveis.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$13,99</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={batata} alt="Batatas em pilha"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Kilo da Batata</h5>
                                    <p className="card-text">Versátil e nutritiva, a batata orgânica vai do purê ao forno com sabor e qualidade de verdade — direto do campo pra sua mesa.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$5,79</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={abobora} alt="Abóbora"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Abóbora</h5>
                                    <p className="card-text">Cheia de sabor e nutrientes, a abóbora orgânica é ideal para sopas, doces ou assados. Sabor caseiro com o frescor do campo, para completar sua comida.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$3,49</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={peanut} alt="Amendoins em pilha"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">100g de Amendoim</h5>
                                    <p className="card-text">Torrado ou cru, o amendoim orgânico é energia pura! Rico em proteínas, puro e perfeito para o seu dia a dia sem agrotóxicos.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$2,99</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={endive} alt="Escarola"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Escarola</h5>
                                    <p className="card-text">Refrescante e levemente amarga, a escarola orgânica dá um toque especial às saladas e refogados com sabor e saúde.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$3,99</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={banana} alt="Banana"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Banana</h5>
                                    <p className="card-text">Bananas nanica maduras e deliciosas. Garanta já a sua duzia!</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$9,99</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={tomato} alt="Tomate Orgânico"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Tomate Orgânico</h5>
                                    <p className="card-text">Vermelho vibrante e cheio de sabor, ideal para saladas, molhos e muito mais. Colhido sem agrotóxicos.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$6,49</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={broccoli} alt="Brócolis"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Brócolis</h5>
                                    <p className="card-text">Crocante, nutritivo e 100% orgânico. Vai bem no vapor, no arroz ou refogado com alho!</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$4,89</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={pineapple} alt="Abacaxi"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Abacaxi</h5>
                                    <p className="card-text">Suculento e docinho! Perfeito para sucos, sobremesas ou para comer puro e gelado.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$7,99</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={lettuce} alt="Alface Crespa"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Alface Crespa</h5>
                                    <p className="card-text">Folhas fresquinhas, crocantes e sem veneno. Perfeita para saladas mais leves e saudáveis!</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$2,49</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={beetroot} alt="Beterraba"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Beterraba</h5>
                                    <p className="card-text">Rica em ferro e super saborosa. Ideal para saladas, sucos ou sopas naturais.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$3,49</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card h-100" style={{maxWidth: "300px", marginLeft: "auto", marginRight: "auto"}}>
                                <img className="card-img-top img-fluid" src={cucumber} alt="Pepino Japonês"/>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Pepino Japonês</h5>
                                    <p className="card-text">Refrescante e crocante, perfeito para saladas ou conservas! Orgânico e cheio de frescor.</p>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                                        <span className="valor_venda"><b>R$4,29</b></span>
                                        <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br /> <br /> <br /> <br />

</div>

  )
}