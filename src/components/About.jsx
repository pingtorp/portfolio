import React from 'react';
import { Zap, Sparkles, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Section, { Reveal, Stagger, StaggerItem } from './ui/Section';

const highlightIcons = [Zap, Sparkles, Users];

const About = () => {
  const { about, languages, location } = portfolioData.personal;
  const { highlights } = portfolioData;

  return (
    <Section id="about" index="01" eyebrow="About" title="Engineer first, with a product mindset.">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-12">
        <Reveal>
          <dl className="space-y-5 text-sm">
            {[
              ['Based in', location],
              ['Focus', 'React.js · TypeScript · Real-time UIs'],
              ['Domain', 'FinTech, banking, healthcare, lab systems'],
              ['Languages', languages.join(' · ')],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
                <dt className="eyebrow">{k}</dt>
                <dd className="text-right font-medium text-fg">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-lg sm:text-xl leading-relaxed text-fg/90 text-pretty">{about}</p>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <StaggerItem key={item.title} className="card hover-lift p-5">
                  <span className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-sm font-semibold text-fg">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </Section>
  );
};

export default About;
