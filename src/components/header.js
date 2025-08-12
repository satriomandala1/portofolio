import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <div className="logo">DS Portfolio</div>
      <nav>
        <ul>
          <li><Link to="#home">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#projects">Projects</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
      <button className="theme-toggle" aria-label="Toggle dark mode">
        <i className="fas fa-moon"></i>
      </button>
    </header>
  );
};

export default Header;
