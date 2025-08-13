import React from 'react';
import "../styles/global.css";
const Projects = () => {
  return (
    <section id="projects" className="projects">
            <div ref={ref} className={`project ${inView ? 'fade-in' : ''}`}>
        </div>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card"
        >
                      <div ref={ref} className={`project-card ${inView ? 'fade-in' : ''}`}>
        </div>
          <div className="project-image">
            <img src="https://placehold.co/600x400" alt="Sentiment analysis dashboard showing positive and negative tweet classifications" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Website pinjam dulu</h3>
            <p>pinjam uang dulu bayar nanti mudahkan?.</p>
            <div className="project-links">
              <a href="#" className="btn">View Code</a>
            </div>
          </div>
        </div>
         <div className="project-card">
          <div className="project-image">
            <img src="https://placehold.co/600x400" alt="House price prediction model interface with interactive map and charts" />
          </div>
         <div className="project-content">
            <h3 className="project-title">Website program makan gratis</h3>
            <p>kiko enak tau ?.</p>
            <div className="project-links">
              <a href="#" className="btn">View Code</a>
            </div>
          </div>
           </div>
        <div className="project-card">
          <div className="project-image">
            <img src="https://placehold.co/600x400" alt="House price prediction model interface with interactive map and charts" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Website Bansos</h3>
            <p>Bansos (bantuan sosial).</p>
            <div className="project-links">
              <a href="#" className="btn">View Code</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
            <img src="https://placehold.co/600x400" alt="Customer segmentation dashboard with clusters visualized in 3D space" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Approvement</h3>
            <p>Juara 1 lomba kelereng.</p>
            <div className="project-links">
              <a href="#" className="btn">View Code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
