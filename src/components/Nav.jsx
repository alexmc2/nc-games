import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/">Home</Link>
        <Link to="/select-user">Login</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </nav>
  );
};

export default Navbar;
