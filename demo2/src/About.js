import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="top-border">
        <div className="learn-more">
          LEARN MORE ABOUT US
        </div>
        <div className="about-button-container">
          <Link to="/" className="about-button">Home</Link>
          <Link to="/Shop" className="about-button">Products</Link>
          <Link to="/About" className="about-button">About</Link>
        </div>
      </div>
      <div className="content">
        <div className="content-text">
          MEET INDIA'S 1st <br />
          100% VEGAN <br />
          BEAUTY BRAND <br /><br />
          We believe in goodness that delivers<br />
          Our cruelty-free skincare, makeup, haircare, and bodycare products are made with formulations that are all about 'good science' that pairs natural ingredients with science-backed actives for goodness that truly does deliver.
        </div>
      </div>
    </div>
  );
}

export default About;


