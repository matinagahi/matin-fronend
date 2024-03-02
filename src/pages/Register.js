import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file for styling

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    familyName: '',
    dateOfBirth: '',
    email: '',
    username: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Assuming the backend sends a token upon successful registration
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store the token
        navigate('/'); // Redirect to home or dashboard page
      } else {
        navigate('/login'); // Redirect to login page if no token is provided
      }
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : 'No response');
      // Handle registration failure
    }
  };
  
  

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        {/* Input fields */}
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /><br />
        <input name="familyName" value={formData.familyName} onChange={handleChange} placeholder="Family Name" required /><br />
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required /><br />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required /><br />
        <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" required /><br />
        <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
