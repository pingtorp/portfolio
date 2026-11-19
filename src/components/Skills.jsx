import React, { useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import Section, { Stagger, StaggerItem } from './ui/Section';

// Display order and labels; categories not listed here are appended at the end
const categoryMeta = {
  'Frontend': 'Frontend',
  'Real-Time & APIs': 'Real-time & APIs',
  'ML/AI': 'AI-first engineering & ML',
  'Backend': 'Backend',
  'Database': 'Data',
  'Tools & DevOps': 'Tooling & testing',
  'Testing': 'Testing',
};

const Skills = () => {
  const { skills } = portfolioData;

  const groups = useMemo(() => {
    const map = new Map(Object.keys(categoryMeta).map((k) => [k, []]));
    skills.forEach((s) => {
      if (!map.has(s.category)) map.set(s.category, []);
      map.get(s.category).push(s);
    });
    return [...map.entries()].filter(([, list]) => list.length > 0);
  }, [skills]);

  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Toolkit"
      title="The stack I work in every day."
      intro="Deep in React and TypeScript, comfortable across the stack, and fluent in AI-agent workflows that compress delivery time without lowering the bar."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([category, list]) => (
          <StaggerItem key={category} className="card hover-lift p-5 sm:p-6">
            <h3 className="eyebrow mb-4">{categoryMeta[category] ?? category}</h3>
            <ul className="flex flex-wrap gap-2">
              {list.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-elevated/50 px-3 py-1.5 text-sm font-medium text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span aria-hidden="true" className="text-[0.95rem] text-muted">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
};

export default Skills;
