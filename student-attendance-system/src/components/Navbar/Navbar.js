import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/logo.jpg" alt="NIBM" className="navbar-logo" />
      </div>
      <ul className="navbar-center">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/service">Service</a></li>
      </ul>
      <div className="navbar-right">
        <button className="logout-button">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;