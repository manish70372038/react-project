import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = () => {
  localStorage.setItem('userName', formData.fullName);
  localStorage.setItem('userEmail', formData.emailAddress);
  navigate('/account-settings');
};
  return (
    <div className="create-container">
      <div className="create-header">
        <h1 className="create-title">
          Create your
          <br />
          PopX account
        </h1>
      </div>

      <div className="form-body">
        <div className="field-group">
          <label className="field-label">Full Name*</label>
          <input
            className="field-input"
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label">Phone number*</label>
          <input
            className="field-input"
            type="tel"
            name="phoneNumber"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label">Email address*</label>
          <input
            className="field-input"
            type="email"
            name="emailAddress"
            placeholder="Marry Doe"
            value={formData.emailAddress}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label">Password *</label>
          <input
            className="field-input"
            type="password"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label">Company name</label>
          <input
            className="field-input"
            type="text"
            name="companyName"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="radio-group">
          <p className="radio-label">Are you an Agency?*</p>
          <div className="radio-options">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              <span className="radio-text">Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              <span className="radio-text">No</span>
            </label>
          </div>
        </div>
      </div>

      <div className="create-footer">
        <button className="btn-create" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
