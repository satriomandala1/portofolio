import React from 'react';
import { Link } from 'gatsby';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span>MANDALA</span></h1>
        <p>Lorem ipsum gak jelas.</p>
        <Link to="#contact" className="btn">Contact Me</Link>
      </div>
      <div className="hero-image">
        <img src="https://placehold.co/400x400" alt="Professional data scientist working on laptop with data visualization on screen" />
      </div>
    </section>
  );
};

export default Hero;
