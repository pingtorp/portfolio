import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { email, linkedin, github } = portfolioData.personal;

  const socials = [
    { icon: <Github size={18} />, href: `https://${github}`, label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: `https://${linkedin}`, label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: `mailto:${email}`, label: 'Email' },
  ];

  return (
    <footer className="w-full bg-lightBg dark:bg-darkBg border-t border-slate-200 dark:border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-sm text-slate-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} <span className="text-slate-700 dark:text-white font-medium">R. P. Abhijith</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-2 rounded-full text-slate-500 dark:text-gray-400 hover:text-primaryGreen dark:hover:text-secondaryGreen hover:bg-primaryGreen/10 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
