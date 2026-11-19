import React from 'react';
import { ArrowUpRight, Github, Lock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Section, { Reveal, Stagger, StaggerItem } from './ui/Section';

const splitMetrics = (metrics) => (metrics ? metrics.split('·').map((m) => m.trim()).filter(Boolean) : []);

const RepoLink = ({ project }) =>
  project.github ? (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-fg transition-colors"
      aria-label={`Code for ${project.title} on GitHub`}
    >
      <Github size={14} /> Code <ArrowUpRight size={12} />
    </a>
  ) : (
    <span className="inline-flex items-center gap-1 text-xs text-subtle" title="Client / company work — source is private">
      <Lock size={12} /> Private
    </span>
  );

const Projects = () => {
  const { projects } = portfolioData;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Selected work"
      title="Products I've designed, built and shipped."
      intro="Most of my work is commercial and closed-source, so here's what each project does, my role, and the measurable outcome."
    >
      <Stagger className="grid gap-5 md:grid-cols-2">
        {featured.map((project) => (
          <StaggerItem
            as="article"
            key={project.title}
            className="card group relative flex flex-col overflow-hidden p-6 sm:p-7 hover-lift hover:shadow-xl"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-4">
              <p className="font-mono text-xs text-subtle">{project.role}</p>
              <RepoLink project={project} />
            </div>

            <h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight text-fg">{project.title}</h3>
            <p className="mt-3 leading-relaxed text-muted text-pretty">{project.desc}</p>

            {project.bullets?.length > 0 && (
              <ul className="mt-5 space-y-2">
                {project.bullets.filter((b) => !project.desc.startsWith(b.slice(0, 40))).map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-fg/80">
                    <span aria-hidden="true" className="mt-[0.55rem] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto pt-6">
              {splitMetrics(project.metrics).length > 0 && (
                <ul className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-3" aria-label="Key outcomes">
                  {splitMetrics(project.metrics).map((m) => (
                    <li key={m} className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-2 text-xs font-medium leading-snug text-accent">
                      {m}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="flex flex-wrap gap-1.5 border-t border-line pt-5" aria-label="Technologies">
                {project.tech.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {rest.length > 0 && (
        <>
          <Reveal>
            <h3 className="eyebrow mt-16 mb-4">More projects</h3>
          </Reveal>
          <Stagger as="ul" className="card divide-y divide-line overflow-hidden">
            {rest.map((project) => (
              <StaggerItem
                as="li"
                key={project.title}
                className="grid gap-3 p-5 sm:p-6 transition-colors hover:bg-elevated/50 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] md:items-start md:gap-8"
              >
                <div>
                  <h4 className="font-semibold text-fg">{project.title}</h4>
                  <p className="mt-0.5 text-sm text-subtle">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-muted">{project.desc}</p>
                  {project.metrics && <p className="mt-2 text-xs font-medium text-accent">{project.metrics}</p>}
                  <p className="mt-2 font-mono text-xs text-subtle">{project.tech.join(' · ')}</p>
                </div>
                <div className="md:pt-0.5">
                  <RepoLink project={project} />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </>
      )}
    </Section>
  );
};

export default Projects;
