import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const dots = [
  { top: '5%',  left: '8%',  size: 48 },
  { top: '3%',  left: '78%', size: 40 },
  { top: '10%', left: '32%', size: 38 },
  { top: '13%', left: '42%', size: 36 },
  { top: '18%', left: '46%', size: 38 },
  { top: '23%', left: '54%', size: 40 },
  { top: '28%', left: '62%', size: 42 },
  { top: '32%', left: '72%', size: 40 },
  { top: '26%', left: '44%', size: 36 },
  { top: '38%', left: '46%', size: 44 },
  { top: '42%', left: '60%', size: 38 },
  { top: '44%', left: '26%', size: 40 },
  { top: '48%', left: '72%', size: 36 },
];

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="dots-area">
        {dots.map((dot, i) => (
          <span
            key={i}
            className="dot"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
            }}
          />
        ))}
      </div>

      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button
          className="btn btn-primary"
          onClick={() => navigate('/create-account')}
        >
          Create Account
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
