import React from 'react';
import { Link } from 'react-router-dom';
import background2Index from '../assets/background2_index.jpg';

function AboutUsSection() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background2Index})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '2rem 0',
    borderRadius: '10px',
    color: '#fff',
    position: 'relative',
    minHeight: '400px',
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4 section1">
        <h2>
          <i className="bi bi-signpost-2-fill"></i>
          <span className="mb-0 titlecolor">Mais sobre nossa iniciativa</span>
        </h2>
      </div>
      <div className="hero-image hero2" style={heroStyle}>
        <div className="container py-5 text-center">
          <div className="titulo2">
            <h2 className="text-white">Feira - Uma alternativa sustentável para o futuro</h2>
          </div>
          <p className="texto2 text-white">
            Na <b><mark>Feira</mark></b>, conectamos quem planta
            com quem valoriza o que é natural. Somos uma plataforma digital criada para facilitar a{' '}
            <b>
              <mark>
                compra e venda de alimentos e produtos orgânicos de forma limpa, segura e transparente
              </mark>
            </b>{' '}
            — usando a tecnologia{' '}
            <b>
              <mark>Blockchain</mark>
            </b>{' '}
            para garantir transações confiáveis e rastreáveis. <br /><br />Acreditamos que é possível unir{' '}
            <b>
              <mark>inovação e sustentabilidade</mark>
            </b>{' '}
            para transformar a relação entre o campo e a cidade. Aqui, produtores anunciam diretamente seus produtos, e
            consumidores compram com confiança, sabendo exatamente de onde vem o que colocam na mesa. <br /><br />Nossas
            raízes estão na lealdade, confiabilidade e transparência. Crescemos com os pilares da tecnologia, agricultura
            consciente, sustentabilidade, economia justa e inovação constante. A Feira é mais do que um marketplace. É
            um{' '}
            <b>
              <mark>
                compromisso com um futuro mais saudável, ético e conectado.
              </mark>
            </b>
          </p>
          <Link to="/sobrenos" className="btn btn-success btn3">
            Saiba mais sobre nós
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutUsSection;