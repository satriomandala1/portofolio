import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div>
          <p>I recently graduated with a degree in Data Science and have developed strong skills in statistical analysis, programming (Python, R, SQL), and data visualization.</p>
          <p>My academic projects involved predictive modeling, natural language processing, and exploratory data analysis. I'm particularly interested in applying machine learning to solve real-world problems.</p>
        </div>
        <div>
          <h3>Skills</h3>
          <div className="skills">
            <span className="skill">Python</span>
            <span className="skill">Pandas</span>
            <span className="skill">NumPy</span>
            <span className="skill">Scikit-learn</span>
            <span className="skill">SQL</span>
            <span className="skill">Tableau</span>
            <span className="skill">Machine Learning</span>
            <span className="skill">Data Visualization</span>
            <span className="skill">Statistics</span>
            <span className="skill">Git</span>
          </div>
        </div>
      </div>

      <div className="education">
        <h3 className="section-title">Education</h3>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-date">2020 - 2024</div>
              <h4>Bachelor of Science in Data Science</h4>
              <p>University of Technology</p>
              <p>GPA: 3.8/4.0</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-date">2016 - 2020</div>
              <h4>High School Diploma</h4>
              <p>Science and Mathematics Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
