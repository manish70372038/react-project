import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
