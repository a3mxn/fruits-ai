// src/components/Login.jsx
import { useState } from 'react';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import '../Styles/Login.css'; // Import CSS for styling

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
          <form>
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <div className="auth-social">
              <button className="auth-social-btn google">
                <FaGoogle /> Sign in with Google
              </button>
              <button className="auth-social-btn twitter">
                <FaTwitter /> Sign in with Twitter
              </button>
            </div>
          </form>
        ) : (
          <form>
            <h2>Register</h2>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
            <div className="auth-social">
              <button className="auth-social-btn google">
                <FaGoogle /> Sign up with Google
              </button>
              <button className="auth-social-btn twitter">
                <FaTwitter /> Sign up with Twitter
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
