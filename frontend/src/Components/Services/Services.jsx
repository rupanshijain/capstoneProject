import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Driveways',
    description: 'Durable and aesthetically pleasing driveways that enhance the curb appeal of your home, made with the highest quality materials.'
  },
  {
    title: 'Patios',
    description: 'Beautifully designed patios that create the perfect outdoor space for relaxation and entertainment, tailored to fit your lifestyle.'
  },
  {
    title: 'Walkouts',
    description: 'Seamless and stylish walkouts that blend with your home’s architecture, providing easy access to your outdoor areas.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
