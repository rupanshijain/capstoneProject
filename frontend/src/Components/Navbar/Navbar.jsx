import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <h1>Pinewood Construction Co.</h1>
        <nav>
          <ul>
            <li><NavLink exact="true" to="/" activeclassname="active">Home</NavLink></li>
            <li><NavLink to="/services" activeclassname="active">Services</NavLink></li>
            <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
            <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
