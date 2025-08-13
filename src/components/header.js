import React from 'react';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import "../styles/global.css";

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% dari elemen harus terlihat
  });

  return (
    <header ref={ref} className={`header ${inView ? 'fade-in' : ''}`}>
      <div className="logo">Mandala Portfolio</div>
      <nav>
        <ul>
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#social">Contact</Link></li>
        </ul>
      </nav>
      <button className="theme-toggle" aria-label="Toggle dark mode">
        <i className="fas fa-moon"></i>
      </button>
    </header>
  );
};

export default Header;
