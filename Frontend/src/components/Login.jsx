// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import '../Styles/Login.css'; // Updated import for CSS

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ email: '', password: '', name: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/home'); // Redirect to home page after login
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <div
          className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </div>
        <div
          className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => handleTabChange('register')}
        >
          Register
        </div>
      </div>
      <div className="auth-form">
        {activeTab === 'login' ? (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            <div className="auth-forgot-password">
              <span className="auth-forgot-password-text">
                Forgot Password?
              </span>
            </div>
            <button type="submit">Login</button>
            <div className="auth-social">
              <button className="auth-social-btn google">
                <FaGoogle />
              </button>
              <button className="auth-social-btn twitter">
                <FaTwitter />
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            <button type="submit">Register</button>
            <div className="auth-social">
              <button className="auth-social-btn google">
                <FaGoogle />
              </button>
              <button className="auth-social-btn twitter">
                <FaTwitter />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
