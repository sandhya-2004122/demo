import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cleanserImage from './assets/images/cleanser.jpg';
import tonerImage from './assets/images/toner.jpg';
import moisturizerImage from './assets/images/moisturizer.jpg';
import sunscreenImage from './assets/images/sunscreen.jpg';
import vitaminCImage from './assets/images/vitaminc.jpg';
import niacinamideImage from './assets/images/hydralic.jpg';
import eyeCreamImage from './assets/images/eye cream.jpg';
import lipBalmImage from './assets/images/lipbalm.jpg';
import './styles.css';

const Shop = () => {
  const products = [
    { id: 1, name: 'DOUBLE CLEANSER', price: 600, image: cleanserImage },
    { id: 2, name: 'HYDRATING TONER', price: 700, image: tonerImage },
    { id: 3, name: 'MOISTURIZER', price: 750, image: moisturizerImage },
    { id: 4, name: 'SUNSCREEN', price: 800, image: sunscreenImage },
    { id: 5, name: 'VITAMIN C SERUM', price: 400, image: vitaminCImage },
    { id: 6, name: 'NIACINAMIDE SERUM', price: 750, image: niacinamideImage },
    { id: 7, name: 'EYE CREAM', price: 300, image: eyeCreamImage },
    { id: 8, name: 'LIP BALM', price: 400, image: lipBalmImage },
  ];

  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate('/checkout', { state: { product } });
  };

  return (
    <div>
      <div className="blue-border">
        Discover the Beauty Within
      </div>
      <div className="button-container" style={{ marginBottom: '20px' }}>
        <Link to="/home" className="button">Home</Link>
        <Link to="/shop" className="button">Products</Link>
        <Link to="/about" className="button">About</Link>
        <Link to="/contact" className="button">Contact</Link>
      </div>
      <div className="image-container">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-description">
              {product.name}<br />RS.{product.price}
            </p>
            <button className="buy-now-button" onClick={() => handleBuyNow(product)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
