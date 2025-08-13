import React from 'react';
import { Link } from 'gatsby';
import fotoDiri from "../images/fotodiri.jpg";
import { useInView } from 'react-intersection-observer';
import "../styles/global.css";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% dari elemen harus terlihat
  });

  return (
    <section id="home" className="hero">
   <div className={`hero-content ${inView ? 'fade-in' : ''}`}>
        <h1>Hello, I'm <span>SATRIO MANDALA PUTRA</span></h1>
        <p>This portfolio explains all my personal data starting from my Biodata, Education Background, Gallery, and my Social media..</p>
        <Link to="#social" className="btn">Contact Me</Link>
      </div>
      <div className="hero-image">
        <img src={fotoDiri} alt="Professional data scientist" />
      </div>
    </section>
  );
};

export default Hero;
