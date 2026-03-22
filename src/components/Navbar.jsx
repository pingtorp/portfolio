import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Github } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { portfolioData } from '../data/portfolioData';

const navItems = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const { github } = portfolioData.personal;
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(navItems, 100);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // offset
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-darkBg/80 border-b border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-primaryGreen via-secondaryGreen to-lightGreen shadow-[0_0_10px_rgba(52,211,153,0.4)]">
              <img
                src="/profile.jpeg"
                alt="R. P. Abhijith"
                className="w-full h-full rounded-full object-cover object-top border border-lightBg dark:border-darkBg"
              />
            </div>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 rounded-md text-sm font-medium capitalize tracking-wide transition-colors ${
                    activeSection === item
                      ? 'text-primaryGreen dark:text-secondaryGreen'
                      : 'text-gray-600 hover:text-primaryGreen dark:text-gray-300 dark:hover:text-secondaryGreen'
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors" title="GitHub">
              <Github size={19} />
            </a>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
              {isDarkMode ? <Sun className="text-yellow-400" size={19} /> : <Moon className="text-gray-700" size={19} />}
            </button>
            <a href="/resume.pdf" download className="px-5 py-2 font-semibold text-slate-900 dark:text-white bg-lightBg dark:bg-darkBg border border-primaryGreen rounded-md hover:bg-primaryGreen/20 dark:hover:bg-primaryGreen/20 transition-all">
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button onClick={toggleTheme} className="p-2">
              {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon /> }
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-white/10 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-lightBg dark:bg-darkBg absolute w-full left-0 border-b border-slate-300 dark:border-white/10"
          >
            <div className="px-5 pt-5 pb-10 space-y-4 flex flex-col items-center justify-center h-full">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-3 rounded-md text-2xl font-medium capitalize text-slate-700 dark:text-gray-300 hover:text-secondaryGreen"
                >
                  {item}
                </button>
              ))}
              <a href="/resume.pdf" download className="mt-8 px-6 py-3 rounded-full glow-border bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white w-3/4 text-center">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
