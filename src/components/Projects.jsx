import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Star, Zap, Github, Lock } from 'lucide-react';

const Projects = () => {
  const { projects } = portfolioData;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="py-12 relative bg-lightBg dark:bg-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans inline-block relative group">
            <span className="gradient-text">Featured Projects</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primaryGreen to-lightGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </h2>
        </motion.div>

        {/* Featured Projects — 2 columns, content-driven height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-secondaryGreen/40 bg-white/80 dark:bg-white/5 backdrop-blur-sm overflow-hidden hover:border-secondaryGreen/70 hover:shadow-[0_0_24px_rgba(52,211,153,0.12)] transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primaryGreen via-secondaryGreen to-lightGreen" />

              <div className="p-5">
                {/* Header row */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-slate-500 dark:text-gray-400 font-mono text-xs">{project.role}</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-primaryGreen dark:group-hover:text-secondaryGreen transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md text-slate-500 dark:text-gray-400 hover:text-primaryGreen hover:bg-primaryGreen/10 transition-all" title="View on GitHub">
                        <Github size={15} />
                      </a>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-gray-500 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-full" title="Private repository">
                        <Lock size={10} /> Private
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs font-semibold text-secondaryGreen bg-secondaryGreen/10 border border-secondaryGreen/20 px-2.5 py-0.5 rounded-full">
                      <Star size={10} className="fill-secondaryGreen" /> Featured
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                {project.bullets && (
                  <ul className="space-y-2 mb-4">
                    {project.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primaryGreen flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Metrics */}
                {project.metrics && (
                  <div className="flex items-center gap-2 bg-emerald-50 dark:bg-primaryGreen/10 border border-primaryGreen/25 rounded-lg px-3 py-2 mb-4">
                    <Zap size={13} className="text-primaryGreen flex-shrink-0" />
                    <p className="text-primaryGreen dark:text-secondaryGreen text-xs font-semibold">{project.metrics}</p>
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-slate-100 dark:bg-darkBg/80 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/10 group-hover:border-primaryGreen/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects — 2x2 compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 hover:border-primaryGreen/50 hover:shadow-[0_0_16px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col"
            >
              {/* Top colored line */}
              <div className="h-0.5 w-8 bg-gradient-to-r from-primaryGreen to-secondaryGreen mb-3 group-hover:w-full transition-all duration-500 rounded-full" />

              <div className="flex items-start justify-between mb-1">
                <span className="text-slate-400 dark:text-gray-500 font-mono text-xs">{project.role}</span>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primaryGreen transition-colors" title="View on GitHub">
                    <Github size={13} />
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-xs text-slate-300 dark:text-gray-600" title="Private repository">
                    <Lock size={11} />
                  </span>
                )}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primaryGreen dark:group-hover:text-secondaryGreen transition-colors leading-snug">
                {project.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-3 line-clamp-3 flex-1">
                {project.desc}
              </p>

              {project.metrics && (
                <div className="bg-emerald-50 dark:bg-primaryGreen/10 border border-primaryGreen/20 rounded-md px-2 py-1.5 mb-3">
                  <p className="text-primaryGreen dark:text-secondaryGreen text-xs font-semibold leading-snug">✨ {project.metrics}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-1.5 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-darkBg/80 text-slate-500 dark:text-gray-400 border border-slate-200 dark:border-white/10 group-hover:border-primaryGreen/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
