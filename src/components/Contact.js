import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="social-links">
        <a href="#" className="social-link" aria-label="LinkedIn profile"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="social-link" aria-label="GitHub profile"><i className="fab fa-github"></i></a>
        <a href="#" className="social-link" aria-label="Twitter profile"><i className="fab fa-twitter"></i></a>
        <a href="#" className="social-link" aria-label="Email contact"><i className="fas fa-envelope"></i></a>
      </div>
    </section>
  );
};

export default Contact;
