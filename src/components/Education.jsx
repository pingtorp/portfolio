import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Section, { Reveal } from './ui/Section';

const Education = () => {
  const { education, achievements } = portfolioData;
  const [degree, ...schooling] = education;

  return (
    <Section id="education" index="05" eyebrow="Education & recognition" title="Foundations.">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Reveal className="card hover-lift flex flex-col p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={20} />
            </span>
            <span className="font-mono text-xs text-subtle">{degree.year}</span>
          </div>
          <h3 className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight text-fg">{degree.degree}</h3>
          <p className="mt-1 text-muted">{degree.institution}</p>
          <p className="mt-4 text-sm font-semibold text-accent">CGPA {degree.score.replace(/\s*CGPA/i, '')} / 10</p>
          {degree.note && <p className="mt-4 text-sm leading-relaxed text-muted">{degree.note}</p>}

          {schooling.length > 0 && (
            <ul className="mt-auto pt-8 space-y-3">
              {schooling.map((item) => (
                <li key={item.degree} className="flex items-baseline justify-between gap-4 border-t border-line pt-3 text-sm">
                  <span>
                    <span className="font-medium text-fg">{item.degree}</span>
                    <span className="block text-subtle">{item.institution}</span>
                  </span>
                  <span className="whitespace-nowrap text-right">
                    <span className="font-medium text-fg">{item.score}</span>
                    <span className="block font-mono text-xs text-subtle">{item.year}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal delay={0.08} className="card hover-lift p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
              <Award size={20} />
            </span>
            <h3 className="text-base font-semibold text-fg">Honors & awards</h3>
          </div>
          <ul className="mt-6 space-y-5">
            {achievements.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span aria-hidden="true" className="text-2xl leading-none">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-medium text-fg">{item.title}</p>
                    <span className="font-mono text-xs text-subtle">{item.year}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{item.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};

export default Education;
