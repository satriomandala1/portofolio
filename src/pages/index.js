import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/global.css'; // Import global CSS

// Import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage = () => {
  useEffect(() => {
    // Theme toggle functionality with localStorage persistence
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;

    // Check saved theme or preferred color scheme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      html.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else if (currentTheme === 'light') {
      html.classList.remove('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // Toggle theme on button click
    const handleThemeToggle = () => {
      if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
    };

    themeToggle.addEventListener('click', handleThemeToggle);

    // Cleanup event listener on component unmount
    return () => {
      themeToggle.removeEventListener('click', handleThemeToggle);
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Data Science Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
