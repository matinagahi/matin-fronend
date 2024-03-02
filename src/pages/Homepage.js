import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // Make sure this is the correct path to your CSS file

function Homepage() {
  return (
    // Use "homepage-container" class here for centering
    <div className="homepage-container"> 
      <h1>Your To-Do List</h1>
      <div>
        <Link to="/login" className="link-tab">Login</Link>
        <Link to="/register" className="link-tab">Register</Link>
      </div>
    </div>
  );
}

export default Homepage;
