import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
const sectionIds = ['home', ...navItems.map((n) => n.id)];

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const ThemeIcon = isDarkMode ? Sun : Moon;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-bg/80 backdrop-blur-xl border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
          <picture className="block">
            <source srcSet="/profile.webp" type="image/webp" />
            <img src="/profile.jpeg" alt="" className="h-8 w-8 rounded-full object-cover object-top ring-1 ring-line transition-transform duration-300 group-hover:scale-105" />
          </picture>
          <span className="text-sm font-semibold tracking-tight text-fg">
            R. P. Abhijith
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? 'true' : undefined}
                  className={`relative isolate rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-elevated border border-line"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="grid h-9 w-9 place-items-center rounded-full text-muted hover:text-fg hover:bg-elevated transition-colors"
            aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <ThemeIcon size={17} />
          </button>
          <a href="/resume.pdf" download="Abhijith_RP_Resume.pdf" className="hidden sm:inline-flex btn-primary !py-2 !px-4">
            Resume <ArrowUpRight size={15} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-full text-fg hover:bg-elevated transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden h-[calc(100dvh-4rem)] bg-bg border-t border-line"
          >
            <ul className="container-page flex flex-col py-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline justify-between border-b border-line py-4 text-2xl font-semibold tracking-tight text-fg"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
              <li className="pt-8">
                <a href="/resume.pdf" download="Abhijith_RP_Resume.pdf" className="btn-primary w-full">
                  Download resume <ArrowUpRight size={15} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
