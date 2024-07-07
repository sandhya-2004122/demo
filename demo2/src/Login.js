import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import backgroundImage from './assets/images/login-bg.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); 

  const validateUsername = (value) => {
    if (!/^[a-zA-Z]+$/.test(value)) {
      setUsernameError('Username should contain only characters.');
    } else {
      setUsernameError('');
    }
  };

  const validatePassword = (value) => {
    if (!/^\d+$/.test(value)) {
      setPasswordError('Password should contain only numbers.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername(username);
    validatePassword(password);

    if (usernameError === '' && passwordError === '') {
      
      console.log('Form submitted');
      
      navigate('/home'); 
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="login-content">
        <h1>FIRST LOGIN TO CONTINUE</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={(e) => validateUsername(e.target.value)}
              required
            />
            {usernameError && <p className="error">{usernameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => validatePassword(e.target.value)}
              required
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div className="button-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;



