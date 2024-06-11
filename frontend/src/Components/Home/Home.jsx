// src/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h2>Your Dream Building Awaits</h2>
          <p>We build quality homes and commercial buildings with utmost dedication and precision.</p>
          <a href="#contact" className="cta-button">Get a Quote</a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Residential Construction</h3>
              <p>We build homes that last a lifetime with modern designs and top-notch materials.</p>
            </div>
            <div className="card">
              <h3>Commercial Construction</h3>
              <p>From office buildings to retail spaces, we construct functional and stylish buildings.</p>
            </div>
            <div className="card">
              <h3>Renovation</h3>
              <p>Transform your space with our expert renovation services tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
