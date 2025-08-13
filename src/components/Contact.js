import React from "react";
import "../styles/global.css";
import fotodiri from "../images/fotodiri.jpg"; // pastikan path ini benar

const Social = () => {
  return (
    <section id="social" className="social-card">
         <div ref={ref} className={`Social-card ${inView ? 'fade-in' : ''}`}>
        </div>
      {/* Foto Profil */}
      <div className="social-photo">
        <img src={fotodiri} alt="Foto Profil" />
      </div>

      {/* Konten */}
      <div className="social-content">
           
        <h2>Social Media</h2>
        <p>
          Find me on various social media platforms to communicate,
share ideas, and collaborate. 
        </p>
        <ul className="social-links">
          <li>
            <a href="https://wa.me/6285893236193" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
              />
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://instagram.com/mandla_15/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
              />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/satriomandala" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
              />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Social;
