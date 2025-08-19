import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div>
          <p><strong>I'm a web developer with experience in website development and Microsoft. I was introduced to technology in junior high school, where I learned about various computer components and their functions.</strong>  </p>
          <p><strong>Since high school, I started helping in my cooperative. There I recorded the income and deductions of the cooperative's finances using Microsoft Excel. I also recorded items that were selling well and those that were not selling well. At that time, I also learned Microsoft Word for monthly reports.</strong></p>
          <p><strong>and in 2024 I changed schools and there I majored in software engineering, that's where I started in the world of programming, I learned a lot of things, for example Web Development, I tried a lot to make websites with various programming languages.</strong></p>
          {/* <p><strong>Gender:</strong> Man</p>
          <p><strong>Citizenship:</strong> Indonesia</p>
          <p><strong>Status:</strong> siswa SMK</p> */}
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
