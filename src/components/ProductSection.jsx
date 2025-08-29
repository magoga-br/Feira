import { Link } from 'react-router-dom';
import ProductCard from './ProductCard'; // Importe o componente ProductCard

// Importar imagens dos produtos
import strawberry from '../assets/strawberry.jpg';
import pumpkin from '../assets/pumpkin.jpg';
import potato from '../assets/potato.jpg';
import peanut from '../assets/peanut.jpg';

function ProductSection() {
  const products = [
    {
      image: strawberry,
      title: 'Cesta de Morangos',
      description: 'Doces, fresquinhos e colhidos com carinho! Morangos 100% orgânicos, ideais para sobremesas ou lanches saudáveis.',
      price: 'R$13,99',
    },
    {
      image: pumpkin,
      title: 'Abóbora',
      description: 'Cheia de sabor e nutrientes, a abóbora orgânica é ideal para sopas, doces ou assados. Sabor caseiro com o frescor do campo, para completar sua comida.',
      price: 'R$3,49',
    },
    {
      image: potato,
      title: 'Quilo de Batata',
      description: 'Versátil e nutritiva, a batata orgânica vai do purê ao forno com sabor e qualidade de verdade — direto do campo pra sua mesa.',
      price: 'R$5,79',
    },
    {
      image: peanut,
      title: '100g de Amendoim',
      description: 'Torrado ou cru, o amendoim orgânico é energia pura! Rico em proteínas, puro e perfeito para o seu dia a dia sem agrotóxicos.',
      price: 'R$2,99',
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4 section1">
        <h2>
          <i className="bi bi-cart-check"></i>
          <span className="mb-0 titlecolor">Produtos em destaque</span>
        </h2>
        <Link to="/produtos" className="btn btn-outline-success">Ver todos</Link>
      </div>

      <div className="row g-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default ProductSection;