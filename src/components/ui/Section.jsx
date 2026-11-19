import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.21, 0.47, 0.32, 0.98];

export const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </Tag>
  );
};

export const Stagger = ({ children, className = '', delay = 0, stagger = 0.07, as = 'div' }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
    >
      {children}
    </Tag>
  );
};

export const StaggerItem = ({ children, className = '', as = 'div' }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
      }}
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
