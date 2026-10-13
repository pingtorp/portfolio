import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name, title } = portfolioData.personal;

  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col items-start justify-between gap-4 text-sm text-subtle sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} <span className="font-medium text-fg">{name}</span> · {title}
        </p>
        <a href="#home" className="inline-flex items-center gap-1.5 hover:text-fg transition-colors">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
