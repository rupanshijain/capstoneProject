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
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
