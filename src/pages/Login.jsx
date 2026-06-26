import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormFilled = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (isFormFilled) {
      navigate('/account-settings');
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-title">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>
      </div>

      <div className="login-form">
        <div className="field-group">
          <label className="field-label">Email Address</label>
          <input
            className="field-input"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field-group">
          <label className="field-label">Password</label>
          <input
            className="field-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className={`btn-login ${isFormFilled ? 'active' : ''}`}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
