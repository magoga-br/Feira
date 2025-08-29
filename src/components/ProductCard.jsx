import { Link } from 'react-router-dom';

function ProductCard({ image, title, description, price }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="home-card h-100">
        <img className="home-card-img-top" src={image} alt={title} />
        <div className="home-card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-auto">
            <span className="cart"><b>{price}</b></span>
            <Link to="/pages/produtos.html" className="btn btn-sm btn-success btncard">
              Compre agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;