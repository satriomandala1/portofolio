import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div>
          <p>cicak cicak di dinding diam diam merayap datang nyamuk hap lalu di tangkap.</p>
          <p>balonku ada lima rupa warnanya merah kuning kelabu gak apal.</p>
        </div>
        <div>
          <h3>Skills</h3>
          <div className="skills">
            <span className="skill">Makan 3 kali sehari</span>
            <span className="skill">Tidur tepat waktu</span>
            <span className="skill">main bekel</span>
            <span className="skill">makan nasi pakai sumpit</span>
            <span className="skill">tidur sambil merem</span>

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
              <p>ketua basis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
