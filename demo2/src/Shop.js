import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <div>
      <div className="blue-border">
        Discover the Beauty Within
      </div>
      <div className="button-container" style={{ marginBottom: '20px' }}>
        <Link to="/" className="button">Home</Link>
        <Link to="/Shop" className="button">Products</Link>
        <Link to="/About" className="button">About</Link>
      </div>
      <div className="image-container">
        <div className="product">
          <img src={cleanserImage} alt="Cleanser" className="product-image" />
          <p className="product-description">DOUBLE CLEANSER<br />RS.600</p>
        </div>
        <div className="product">
          <img src={tonerImage} alt="Toner" className="product-image" />
          <p className="product-description">HYDRATING TONER<br />RS.700</p>
        </div>
        <div className="product">
          <img src={moisturizerImage} alt="Moisturizer" className="product-image" />
          <p className="product-description">MOISTURIZER<br />RS.750</p>
        </div>
        <div className="product">
          <img src={sunscreenImage} alt="Sunscreen" className="product-image" />
          <p className="product-description">SUNSCREEN<br />RS.800</p>
        </div>
      </div>
      <div className="image-container">
        <div className="product">
          <img src={vitaminCImage} alt="Vitamin C Serum" className="product-image" />
          <p className="product-description">VITAMIN C SERUM<br />RS.400</p>
        </div>
        <div className="product">
          <img src={niacinamideImage} alt="Niacinamide Serum" className="product-image" />
          <p className="product-description">NIACINAMIDE SERUM<br />RS.750</p>
        </div>
        <div className="product">
          <img src={eyeCreamImage} alt="Eye Cream" className="product-image" />
          <p className="product-description">EYE CREAM<br />RS.300</p>
        </div>
        <div className="product">
          <img src={lipBalmImage} alt="Lip Balm" className="product-image" />
          <p className="product-description">LIP BALM<br />RS.400</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
