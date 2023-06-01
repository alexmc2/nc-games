import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </nav>
  );
};

export default Navbar;
