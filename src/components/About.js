import React from 'react';
import { useInView } from 'react-intersection-observer';

import "../styles/global.css";
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // 10% dari elemen harus terlihat
  });

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div ref={ref} className={`about-content ${inView ? 'fade-in' : ''}`}>
        <div>
          <p><strong>Full Name:</strong> Satrio Mandala Putraa</p>
          <p><strong>Tempat, Tanggal Lahir:</strong> Tangerang, 15 January 2007</p>
          <p><strong>Tempat Tinggal:</strong> Tangerang, Indonesia</p>
          <p><strong>Gender:</strong> Man</p>
          <p><strong>Citizenship:</strong> Indonesia</p>
          <p><strong>Status:</strong> Siswa SMK</p>
        </div>
        <div>
          <h3>Skills</h3>
          <div className="skills">
            <span className="skill">Makan 3 kali sehari</span>
            <span className="skill">Tidur tepat waktu</span>
            <span className="skill">Main bekel</span>
            <span className="skill">Makan nasi pakai sumpit</span>
            <span className="skill">Tidur sambil merem</span>
          </div>
        </div>
      </div>

      <div className="education">
        <h3 className="section-title">Education</h3>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <div className="timeline-date">2020 - 2024</div>
              <h4>Harvard University</h4>
              <p>University of Technology</p>
              <p>GPA: 3.8/4.0</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <div className="timeline-date">2016 - 2020</div>
              <h4>Paud</h4>
              <p>Ketua basis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
