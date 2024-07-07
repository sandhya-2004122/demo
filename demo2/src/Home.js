import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import homeBackgroundImage from './assets/images/home.jpg';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${homeBackgroundImage})` }}>
      <div className="content-left">
        <div className="headline">
          ULTIMATE SKINCARE SOLUTION
        </div>
        <div className="button-container">
          <Link to="/home" className="button">Home</Link>
          <Link to="/shop" className="button">Products</Link>
          <Link to="/about" className="button">About</Link>
          <Link to="/contact" className="button">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
