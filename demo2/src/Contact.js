import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; // Import Contact-specific CSS file
import instagramImage from './assets/images/instagram.jpg';
// import whatsappImage from './assets/images/whatsapp.jpg';
import gmailImage from './assets/images/gmail.jpg';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="top-border-rose">
          <div className="contact-title">
            Contact Us
          </div>
          <div className="button-container-right">
            <Link to="/home" className="contact-button no-bg">Home</Link>
            <Link to="/shop" className="contact-button no-bg">Products</Link>
            <Link to="/about" className="contact-button no-bg">About</Link>
          </div>
        </div>
        <div className="contact-content">
          <div className="contact-item">
            <img src={instagramImage} alt="Instagram" className="contact-image" />
            <p>@pinkglowingco</p>
          </div>
          {/* <div className="contact-item">
            <img src={whatsappImage} alt="WhatsApp" className="contact-image" />
            <p>9823456723</p>
          </div> */}
          <div className="contact-item">
            <img src={gmailImage} alt="Gmail" className="contact-image" />
            <p>pinkglow@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
