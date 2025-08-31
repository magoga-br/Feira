// src/pages/Produtos.jsx
import { useState, useRef } from "react";
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
  const [selectedFrutas, setSelectedFrutas] = useState([]);
  const [selectedLegumes, setSelectedLegumes] = useState([]);
  const [selectedAgro, setSelectedAgro] = useState([]);
  const [selectedRegiao, setSelectedRegiao] = useState([]);
  const productsRef = useRef(null);

  const handleFrutaChange = (value) => {
    setSelectedFrutas((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLegumeChange = (value) => {
    setSelectedLegumes((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAgroChange = (value) => {
    setSelectedAgro((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRegiaoChange = (value) => {
    setSelectedRegiao((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const productsData = [
    {
      img: morango,
      alt: "Morangos em pilha",
      title: "Cesta de Morangos",
      text: "Doces, fresquinhos e colhidos com carinho! Morangos 100% orgânicos, ideais para sobremesas ou lanches saudáveis.",
      price: "R$13,99",
      category: "frutas",
      subtype: "morango",
      agro: "não",
      regiao: "norte",
    },
    {
      img: batata,
      alt: "Batatas em pilha",
      title: "Kilo da Batata",
      text: "Versátil e nutritiva, a batata orgânica vai do purê ao forno com sabor e qualidade de verdade — direto do campo pra sua mesa.",
      price: "R$5,79",
      category: "legumes",
      subtype: "batata",
      agro: "não",
      regiao: "nordeste",
    },
    {
      img: abobora,
      alt: "Abóbora",
      title: "Abóbora",
      text: "Cheia de sabor e nutrientes, a abóbora orgânica é ideal para sopas, doces ou assados. Sabor caseiro com o frescor do campo, para completar sua comida.",
      price: "R$3,49",
      category: "legumes",
      subtype: "abóbora",
      agro: "não",
      regiao: "centro-oeste",
    },
    {
      img: peanut,
      alt: "Amendoins em pilha",
      title: "100g de Amendoim",
      text: "Torrado ou cru, o amendoim orgânico é energia pura! Rico em proteínas, puro e perfeito para o seu dia a dia sem agrotóxicos.",
      price: "R$2,99",
      category: "legumes",
      subtype: "amendoim",
      agro: "não",
      regiao: "sudeste",
    },
    {
      img: endive,
      alt: "Escarola",
      title: "Escarola",
      text: "Refrescante e levemente amarga, a escarola orgânica dá um toque especial às saladas e refogados com sabor e saúde.",
      price: "R$3,99",
      category: "legumes",
      subtype: "escarola",
      agro: "não",
      regiao: "sul",
    },
    {
      img: banana,
      alt: "Banana",
      title: "Banana",
      text: "Bananas nanica maduras e deliciosas. Garanta já a sua dúzia!",
      price: "R$9,99",
      category: "frutas",
      subtype: "banana",
      agro: "não",
      regiao: "norte",
    },
    {
      img: tomato,
      alt: "Tomate Orgânico",
      title: "Tomate Orgânico",
      text: "Vermelho vibrante e cheio de sabor, ideal para saladas, molhos e muito mais. Colhido sem agrotóxicos.",
      price: "R$6,49",
      category: "frutas",
      subtype: "tomate",
      agro: "não",
      regiao: "nordeste",
    },
    {
      img: broccoli,
      alt: "Brócolis",
      title: "Brócolis",
      text: "Crocante, nutritivo e 100% orgânico. Vai bem no vapor, no arroz ou refogado com alho!",
      price: "R$4,89",
      category: "legumes",
      subtype: "brócolis",
      agro: "não",
      regiao: "centro-oeste",
    },
    {
      img: pineapple,
      alt: "Abacaxi",
      title: "Abacaxi",
      text: "Suculento e docinho! Perfeito para sucos, sobremesas ou para comer puro e gelado.",
      price: "R$7,99",
      category: "frutas",
      subtype: "abacaxi",
      agro: "não",
      regiao: "sudeste",
    },
    {
      img: lettuce,
      alt: "Alface Crespa",
      title: "Alface Crespa",
      text: "Folhas fresquinhas, crocantes e sem veneno. Perfeita para saladas mais leves e saudáveis!",
      price: "R$2,49",
      category: "legumes",
      subtype: "alface",
      agro: "não",
      regiao: "sul",
    },
    {
      img: beetroot,
      alt: "Beterraba",
      title: "Beterraba",
      text: "Rica em ferro e super saborosa. Ideal para saladas, sucos ou sopas naturais.",
      price: "R$3,49",
      category: "legumes",
      subtype: "beterraba",
      agro: "não",
      regiao: "norte",
    },
    {
      img: cucumber,
      alt: "Pepino Japonês",
      title: "Pepino Japonês",
      text: "Refrescante e crocante, perfeito para saladas ou conservas! Orgânico e cheio de frescor.",
      price: "R$4,29",
      category: "legumes",
      subtype: "pepino",
      agro: "não",
      regiao: "nordeste",
    },
  ];

  let filteredProducts = productsData;

  const selectedSubtypes = [...selectedFrutas, ...selectedLegumes];
  if (selectedSubtypes.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      selectedSubtypes.includes(p.subtype)
    );
  }

  if (selectedAgro.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      selectedAgro.includes(p.agro)
    );
  }

  if (selectedRegiao.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      selectedRegiao.includes(p.regiao)
    );
  }

  return (
    <>
      {/* Navbar */}

      {/* Main */}
      <main className="container main-content main-produtos">
        <div className="container-fluid">
          <div className="row">
            {/* Barra lateral */}
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12 barra sticky-filter">
              <div className="produtos">
                <h1>Produtos</h1>
              </div>
              <div className="categorias filter-scroll">
                <br />
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>Frutas</p>
                <div className="frutas filtro">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pesquisar.."
                    style={{ marginBottom: "10px" }}
                  />
                  {[
                    { value: "morango", label: "Morango (10)" },
                    { value: "laranja", label: "Laranja (05)" },
                    { value: "banana", label: "Banana (15)" },
                    { value: "maracujá", label: "Maracujá (03)" },
                  ].map((item) => (
                    <span
                      key={item.value}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        id={item.value}
                        type="checkbox"
                        value={item.value}
                        checked={selectedFrutas.includes(item.value)}
                        onChange={() => handleFrutaChange(item.value)}
                        style={{ marginRight: "10px" }}
                      />
                      <label for={item.value} style={{ cursor: "pointer" }}>{item.label}</label>
                      <br />
                    </span>
                  ))}
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
                  {[
                    { value: "batata", label: "Batata (17)" },
                    { value: "alface", label: "Alface (08)" },
                    { value: "escarola", label: "Escarola (13)" },
                    { value: "pepino", label: "Pepino (03)" },
                  ].map((item) => (
                    <span
                      key={item.value}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        id={item.value}
                        type="checkbox"
                        value={item.value}
                        checked={selectedLegumes.includes(item.value)}
                        onChange={() => handleLegumeChange(item.value)}
                        style={{ marginRight: "10px" }}
                      />
                      <label for={item.value} style={{ cursor: "pointer" }}>{item.label}</label>
                      <br />
                    </span>
                  ))}
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
                  {[
                    { value: "sim", label: "Sim" },
                    { value: "não", label: "Não" },
                  ].map((item) => (
                    <span
                      key={item.value}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        id={item.value}
                        type="checkbox"
                        value={item.value}
                        checked={selectedAgro.includes(item.value)}
                        onChange={() => handleAgroChange(item.value)}
                        style={{ marginRight: "10px" }}
                      />
                      <label for={item.value} style={{ cursor: "pointer" }}>{item.label}</label>
                      <br />
                    </span>
                  ))}
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
                  {[
                    { value: "norte", label: "Norte" },
                    { value: "nordeste", label: "Nordeste" },
                    { value: "centro-oeste", label: "Centro-Oeste" },
                    { value: "sudeste", label: "Sudeste" },
                    { value: "sul", label: "Sul" },
                  ].map((item) => (
                    <span
                      key={item.value}
                      style={{ cursor: "pointer" }}
                    >
                      <input
                        id={item.value}
                        type="checkbox"
                        value={item.value}
                        checked={selectedRegiao.includes(item.value)}
                        onChange={() => handleRegiaoChange(item.value)}
                        style={{ marginRight: "10px" }}
                      />
                      <label for={item.value} style={{ cursor: "pointer" }}>{item.label}</label>
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Produtos */}
            <div className="col-xl-10 col-lg-8 col-md-8 col-sm-12" ref={productsRef}>
              <div className="row g-4">
                {filteredProducts.map((p, i) => (
                  <div className="col-md-3" key={i}>
                    <div
                      className="card h-100"
                      style={{ maxWidth: "300px", marginLeft: "auto", marginRight: "auto" }}
                    >
                      <img
                        className="card-img-top img-fluid rounded-top"
                        src={p.img}
                        alt={p.alt}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.text}</p>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <div className="valor_venda fw-bold">{p.price}</div>
                          <a href="#" className="btn btn-sm btn-success btncard">
                            Compre agora
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
}

export default Produtos;