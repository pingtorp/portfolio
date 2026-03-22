import React, { Suspense, useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Lazy loading sections
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Education = React.lazy(() => import('./components/Education'));
const Achievements = React.lazy(() => import('./components/Achievements'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

// Custom Animated Cursor — uses ref + direct DOM to avoid re-renders on every mousemove
const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block w-6 h-6 border-2 border-primaryGreen rounded-full fixed pointer-events-none z-[9999]"
      style={{ willChange: 'transform', top: 0, left: 0 }}
    />
  );
};

const Loader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-lightBg dark:bg-darkBg text-primaryGreen text-2xl animate-pulse">
    Loading...
  </div>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-lightBg dark:bg-darkBg text-slate-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
        <CustomCursor />
        
        <Suspense fallback={<Loader />}>
          <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          
          <main>
            <section id="home"><Hero /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="experience"><Experience /></section>
            <section id="projects"><Projects /></section>
            <section id="education"><Education /></section>
            <section id="achievements"><Achievements /></section>
            <section id="contact"><Contact /></section>
          </main>
          
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
