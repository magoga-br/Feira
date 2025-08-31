import { Link } from 'react-router-dom';
import searchIcon from '../assets/search.png'; 
import backgroundIndex from '../assets/background_index.png'; 

function HeroSection() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(20,20,20,0.6)), url(${backgroundIndex})`
  };

  return (
    <div className="hero-image hero1" style={heroStyle}>
      <div className="container py-5">
        <div className="titulo">
          <h1>Faça sua feira online!</h1>
        </div>
        <div className="subtexto">
          <h5>Alimentos seguros, de qualidade e de todo o Brasil direto na sua mesa</h5>
        </div>

        <div className="search-form-container my-4 formulario">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 w-100">
            <label className="search-label">
              <img src={searchIcon} alt="Ícone de busca" />
              <input type="text" className="form-control" placeholder="Digite seu endereço..." style={{backgroundColor: 'transparent', border: 'none', boxShadow: 'none', width: '100%'}} />
            </label>
            <Link to="/produtos"><button className="btn btn-success" type="submit">Veja produtos próximos</button></Link>
          </div>
        </div>

        <div className="categorias mt-4">
          <button className="variedades">Frutas</button>
          <button className="variedades">Legumes e Hortaliças</button>
          <button className="variedades">Grãos e Cereais</button>
          <button className="variedades">Ervas e Temperos</button>
          <button className="variedades">Orgânicos</button>
          <button className="variedades">Beneficiados</button>
          <button className="variedades">Raízes e Tubérculos</button>
          <button className="variedades">Castanhas e Oleoginosas</button>
          <button className="variedades">Novidades</button>
          <button className="variedades">Mais vendidos</button>
          <button className="variedades">Ofertas da Semana</button>
          <button className="variedades">Safra da Estação</button>
          <button className="variedades">Pronto para Consumo</button>
          <button className="variedades">Sem Agrotóxicos</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;