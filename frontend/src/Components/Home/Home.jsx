// src/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';

const slides = [
  { id: 1, image: 'slide1.jpg', alt: 'Slide 1' },
  { id: 2, image: 'slide2.jpg', alt: 'Slide 2' },
  { id: 3, image: 'slide3.jpeg', alt: 'Slide 3' }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="slideshow">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-label={slide.alt}
            ></div>
          ))}
        </div>
        <div className="container">
          <h2>Building Your Dreams, One Brick at a Time</h2>
          <p>Welcome to Pinewood Construction, where your vision meets our expertise. We are dedicated to creating spaces that inspire, innovate, and stand the test of time. Whether it's your dream home or a commercial masterpiece, we bring precision, passion, and professionalism to every project.</p>
          <a href="#contact" className="cta-button">Get Your Quote Today</a>
        </div>
      </section>

      {/* <section className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Driveways</h3>
              <p>Durable and aesthetically pleasing driveways that enhance the curb appeal of your home, made with the highest quality materials.</p>
            </div>
            <div className="card">
              <h3>Patios</h3>
              <p>Beautifully designed patios that create the perfect outdoor space for relaxation and entertainment, tailored to fit your lifestyle.</p>
            </div>
            <div className="card">
              <h3>Walkouts</h3>
              <p>Seamless and stylish walkouts that blend with your home’s architecture, providing easy access to your outdoor areas.</p>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Home;

