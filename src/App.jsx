import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import MouseGlow from './components/MouseGlow';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Global scroll reveal observer
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    // Observe DOM mutations to attach to new elements easily
    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach((el) => observer.observe(el));
    };

    observeElements();
    // setTimeout to ensure elements are caught immediately after mount
    setTimeout(observeElements, 100);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <MouseGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Certifications />
      <Achievements />
      <Education />
      <Contact />

      <footer style={{ textAlign: 'center', padding: '32px', borderTop: '1px solid var(--bg-secondary)', color: 'var(--text-secondary)' }}>
        <p className="small-text">© {new Date().getFullYear()} Adarsh Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
