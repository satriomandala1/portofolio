import React from 'react';
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span>Data Scientist</span></h1>
        <p>Fresh graduate passionate about transforming raw data into meaningful insights through statistics, programming, and machine learning.</p>
        <Link to="#contact" className="btn">Contact Me</Link>
      </div>
      <div className="hero-image">
        <img src="https://placehold.co/400x400" alt="Professional data scientist working on laptop with data visualization on screen" />
      </div>
    </section>
  );
};

export default Hero;
