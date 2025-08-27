// src/pages/Produtos.jsx
import "../css/styles.css";
import "../css/global.css";
import "../css/magoga.css";

// Imports das imagens
import morango from "../assets/strawberry.jpg";
import batata from "../assets/potato.jpg";
import abobora from "../assets/pumpkin.jpg";
import peanut from "../assets/peanut.jpg";
import endive from "../assets/endive.jpg";
import banana from "../assets/banana.jpg";
import tomato from "../assets/tomato.jpg";
import broccoli from "../assets/broccoli.jpg";
import pineapple from "../assets/pineapple.jpg";
import lettuce from "../assets/lettuce.jpg";
import beetroot from "../assets/beetroot.jpg";
import cucumber from "../assets/cucumber.jpg";
import feiralogo from "../assets/feiralogo.png";

function Produtos() {
  return (
    <>
      {/* Navbar */}

      {/* Main */}
      <main className="container main-content main-produtos">
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
                  <input type="text" className="form-control" placeholder="Pesquisar.." style={{ marginBottom: "10px" }} />
                  <span><input type="checkbox" /> <label>Morango (10)</label></span><br />
                  <span><input type="checkbox" /> <label>Laranja (05)</label></span><br />
                  <span><input type="checkbox" /> <label>Banana (15)</label></span><br />
                  <span><input type="checkbox" /> <label>Maracujá (03)</label></span><br />
                </div>
                <br />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Legumes</p>
                <div className="legumes filtro">
                  <input type="text" className="form-control" placeholder="Pesquisar.." style={{ marginBottom: "10px" }} />
                  <span><input type="checkbox" /> <label>Batata (17)</label></span><br />
                  <span><input type="checkbox" /> <label>Alface (08)</label></span><br />
                  <span><input type="checkbox" /> <label>Escarola (13)</label></span><br />
                  <span><input type="checkbox" /> <label>Pepino (03)</label></span><br />
                </div>
                <br />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Agrotóxicos</p>
                <div className="agrotoxicos filtro">
                  <input type="text" className="form-control" placeholder="Pesquisar.." style={{ marginBottom: "10px" }} />
                  <span><input type="checkbox" /> <label>Sim</label></span><br />
                  <span><input type="checkbox" /> <label>Não</label></span><br />
                </div>
                <br />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Região</p>
                <div className="regiao filtro">
                  <input type="text" className="form-control" placeholder="Pesquisar.." style={{ marginBottom: "10px" }} />
                  <span><input type="checkbox" /> <label>Norte</label></span><br />
                  <span><input type="checkbox" /> <label>Nordeste</label></span><br />
                  <span><input type="checkbox" /> <label>Centro-Oeste</label></span><br />
                  <span><input type="checkbox" /> <label>Sudeste</label></span><br />
                  <span><input type="checkbox" /> <label>Sul</label></span><br />
                </div>
              </div>
            </div>

            {/* Produtos */}
            <div className="col-xl-10 col-lg-8 col-md-8 col-sm-12">
              <div className="row g-4">
                {[
                  { img: morango, alt: "Morangos em pilha", title: "Cesta de Morangos", text: "Doces, fresquinhos e colhidos com carinho! Morangos 100% orgânicos, ideais para sobremesas ou lanches saudáveis.", price: "R$13,99" },
                  { img: batata, alt: "Batatas em pilha", title: "Kilo da Batata", text: "Versátil e nutritiva, a batata orgânica vai do purê ao forno com sabor e qualidade de verdade — direto do campo pra sua mesa.", price: "R$5,79" },
                  { img: abobora, alt: "Abóbora", title: "Abóbora", text: "Cheia de sabor e nutrientes, a abóbora orgânica é ideal para sopas, doces ou assados. Sabor caseiro com o frescor do campo.", price: "R$3,49" },
                  { img: peanut, alt: "Amendoins em pilha", title: "100g de Amendoim", text: "Torrado ou cru, o amendoim orgânico é energia pura! Rico em proteínas, puro e perfeito para o seu dia a dia sem agrotóxicos.", price: "R$2,99" },
                  { img: endive, alt: "Escarola", title: "Escarola", text: "Refrescante e levemente amarga, a escarola orgânica dá um toque especial às saladas e refogados.", price: "R$3,99" },
                  { img: banana, alt: "Banana", title: "Banana", text: "Bananas nanica maduras e deliciosas. Garanta já a sua dúzia!", price: "R$9,99" },
                  { img: tomato, alt: "Tomate Orgânico", title: "Tomate Orgânico", text: "Vermelho vibrante e cheio de sabor, ideal para saladas, molhos e muito mais. Colhido sem agrotóxicos.", price: "R$6,49" },
                  { img: broccoli, alt: "Brócolis", title: "Brócolis", text: "Crocante, nutritivo e 100% orgânico. Vai bem no vapor, no arroz ou refogado com alho!", price: "R$4,89" },
                  { img: pineapple, alt: "Abacaxi", title: "Abacaxi", text: "Suculento e docinho! Perfeito para sucos, sobremesas ou para comer puro e gelado.", price: "R$7,99" },
                  { img: lettuce, alt: "Alface Crespa", title: "Alface Crespa", text: "Folhas fresquinhas, crocantes e sem veneno. Perfeita para saladas mais leves e saudáveis!", price: "R$2,49" },
                  { img: beetroot, alt: "Beterraba", title: "Beterraba", text: "Rica em ferro e super saborosa. Ideal para saladas, sucos ou sopas naturais.", price: "R$3,49" },
                  { img: cucumber, alt: "Pepino Japonês", title: "Pepino Japonês", text: "Refrescante e crocante, perfeito para saladas ou conservas! Orgânico e cheio de frescor.", price: "R$4,29" },
                ].map((p, i) => (
                  <div className="col-md-3" key={i}>
                    <div className="card h-100" style={{ maxWidth: "300px", marginLeft: "auto", marginRight: "auto" }}>
                      <img className="card-img-top img-fluid" src={p.img} alt={p.alt} />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.text}</p>
                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
                          <span className="valor_venda"><b>{p.price}</b></span>
                          <a href="#" className="btn btn-sm btn-success btncard">Compre agora</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br />
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5 className="mb-3"><img src={feiralogo} width="70" height="70" alt="Logo Feira" /></h5>
              <p>Feira Online - Produtos frescos, direto do campo para a sua mesa.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Produtos;
