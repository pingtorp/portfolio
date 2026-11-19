import React, { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';

// index.html applies the saved/system theme before paint; start from what it chose
const initialDark = () => document.documentElement.classList.contains('dark');

function App() {
  const [isDarkMode, setIsDarkMode] = useState(initialDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDarkMode ? '#09090b' : '#fafafa');
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch {
      // storage unavailable (private mode) — theme still works for this visit
    }
  }, [isDarkMode]);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode((d) => !d)} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
