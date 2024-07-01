import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import backgroundImage from './assets/images/bg-image.jpg';
import Shop from './Shop';
import About from './About';
import './styles.css'; 

function App() {
  const divStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '3rem',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '50%',
    maxWidth: '300px',
    marginBottom: '20px',
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={        <div style={{ ...divStyle, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <h1 style={headingStyle}>PINK GLOW</h1>
      <img src={backgroundImage} alt="Background" style={imageStyle} />
              <a href="/Shop" style={{ textDecoration: 'none' }}>
         <button className="button">
              Shop Now
                </button>
              </a>
            </div>
          }
        />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;

