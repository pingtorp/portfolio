import React from 'react';
import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Tag>
  );
};

const Section = ({ id, index, eyebrow, title, intro, children, className = '' }) => (
  <section id={id} className={`py-20 sm:py-28 border-t border-line ${className}`}>
    <div className="container-page">
      <Reveal className="mb-12 sm:mb-16 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12 items-end">
        <div>
          <p className="eyebrow mb-3">
            <span className="text-accent">{index}</span> / {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg text-balance">{title}</h2>
        </div>
        {intro && <p className="text-muted leading-relaxed md:text-lg md:pb-1 text-pretty">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
