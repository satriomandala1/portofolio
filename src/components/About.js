import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div>
          <p><strong>Full Name:</strong> Satrio Mandala Putraa  </p>
          <p><strong>Place and date of birth:</strong> Tangerang 15 january 2007</p>
          <p><strong>Address:</strong> tangerang, Indonesia</p>
          <p><strong>Gender:</strong> Man</p>
          <p><strong>Citizenship:</strong> Indonesia</p>
          <p><strong>Status:</strong> siswa SMK</p>
        </div>
        <div>
          <h3>Skills</h3>
          <div className="skills">
            <span className="skill">Microsoft Excel</span>
            <span className="skill">MIcrosoft word</span>
            <span className="skill">Web development</span>
            <span className="skill">gatsby</span>
            <span className="skill">Javascript</span>
          </div>
        </div>
      </div>

      <div className="education">
        <h3 className="section-title">Education</h3>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-date">2023-2026</div>
              <h4>SMK YUPPENTEK 2</h4>
              <p>SOFTWARE ENGINER</p>
              <p>GPA: 3.8/4.0</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-date">2025</div>
              <h4>internship at Areta Informatics College</h4>
              <p>apprenticeship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
