import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './Shop';
import About from './About';
import Login from './Login';
import Home from './Home';
import Contact from './Contact';
import Checkout from './Checkout'; 
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} /> {/* Add Checkout route */}
      </Routes>
    </Router>
  );
}

export default App;
