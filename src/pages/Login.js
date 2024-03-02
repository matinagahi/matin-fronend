import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the login endpoint
      await axios.post('http://localhost:5000/api/users/login', credentials, {
        withCredentials: true // This is important for cookies to be sent and received
      });
      navigate('/todolist'); // Navigate to the TodoList page upon successful login
    } catch (error) {
      setError('Login failed: ' + (error.response ? error.response.data : 'No response'));
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
          required
        /><br />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        /><br />
        <button type="submit" className="form-button">Login</button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Login;
