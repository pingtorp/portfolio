import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Section, { Reveal } from './ui/Section';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've built and shipped."
      intro="From lab and banking dashboards to an AI-powered trading platform — owning the frontend from architecture through production."
    >
      <ol className="relative">
        {experience.map((exp, index) => {
          const isCurrent = /present/i.test(exp.date);
          const [company, ...place] = exp.company.split(',');
          return (
            <Reveal
              as="li"
              key={`${exp.role}-${exp.date}`}
              delay={0.05 * index}
              className="group relative grid gap-4 border-t border-line py-10 first:border-t-0 first:pt-0 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12"
            >
              <div className="md:sticky md:top-24 md:self-start">
                <p className="font-mono text-xs text-subtle">{exp.date}</p>
                <p className="mt-2 text-base font-semibold text-fg">{company.trim()}</p>
                {place.length > 0 && <p className="text-sm text-muted">{place.join(',').trim()}</p>}
                {isCurrent && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Current
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-fg">{exp.role}</h3>
                <p className="mt-3 leading-relaxed text-muted text-pretty">{exp.desc}</p>

                {exp.bullets?.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {exp.bullets.map((point) => (
                      <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-fg/85">
                        <span aria-hidden="true" className="mt-[0.6rem] h-1 w-3 flex-shrink-0 rounded-full bg-accent/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {exp.tech.map((tech) => (
                    <li key={tech} className="chip">{tech}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
};

export default Experience;
