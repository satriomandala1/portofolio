import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src="https://placehold.co/600x400" alt="Sentiment analysis dashboard showing positive and negative tweet classifications" />
          </div>
          <div className="project-content">
            <h3 className="project-title">Sentiment Analysis</h3>
            <p>Twitter sentiment analysis using NLP techniques with accuracy of 89%.</p>
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
            <h3 className="project-title">House Price Prediction</h3>
            <p>Regression model to predict housing prices using Scikit-learn.</p>
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
            <h3 className="project-title">Customer Segmentation</h3>
            <p>K-means clustering analysis for retail customer segments.</p>
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
