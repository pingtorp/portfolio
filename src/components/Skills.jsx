import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const categories = useMemo(() => {
    const cats = {};
    skills.forEach(skill => {
      if (!cats[skill.category]) cats[skill.category] = [];
      cats[skill.category].push(skill);
    });
    return cats;
  }, [skills]);

  const categoryColors = {
    'Frontend':      { dot: 'bg-sky-400',     bar: 'from-sky-400 to-blue-500',      badge: 'bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800' },
    'Backend':       { dot: 'bg-violet-400',  bar: 'from-violet-400 to-purple-500', badge: 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800' },
    'Database':      { dot: 'bg-amber-400',   bar: 'from-amber-400 to-orange-500',  badge: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' },
    'Tools & DevOps':{ dot: 'bg-primaryGreen',bar: 'from-primaryGreen to-secondaryGreen', badge: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' },
    'Testing':       { dot: 'bg-rose-400',    bar: 'from-rose-400 to-red-500',      badge: 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800' },
    'ML/AI':         { dot: 'bg-fuchsia-400', bar: 'from-fuchsia-400 to-pink-500',  badge: 'bg-fuchsia-50 dark:bg-fuchsia-900/20 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-800' },
  };

  return (
    <section className="py-10 relative bg-lightBg dark:bg-darkBg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans inline-block relative group">
            <span className="gradient-text">Core Skills</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondaryGreen to-primaryGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </h2>
          <p className="mt-2 text-xs text-slate-500 dark:text-gray-500">Hover a skill to see proficiency</p>
        </motion.div>

        <div className="space-y-2">
          {Object.entries(categories).map(([category, catSkills], catIdx) => {
            const colors = categoryColors[category] || categoryColors['Tools & DevOps'];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.06 }}
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-2.5 border-b border-slate-100 dark:border-white/5 last:border-0"
              >
                {/* Category label */}
                <div className="sm:w-32 flex-shrink-0 flex items-center gap-1.5 pt-0.5">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
                  <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                    {category}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2 flex-1">
                  {catSkills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: catIdx * 0.06 + idx * 0.04 }}
                      className="group relative"
                    >
                      {/* Pill */}
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium cursor-default select-none transition-all duration-200 hover:scale-105 hover:shadow-md ${colors.badge}`}>
                        <span className="text-sm leading-none">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>

                      {/* Hover tooltip with progress bar */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-28 bg-white dark:bg-gray-900 border border-slate-200 dark:border-white/10 rounded-lg p-2.5 shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs font-semibold text-slate-700 dark:text-gray-200">{skill.name}</span>
                          <span className={`text-xs font-bold ${colors.dot.replace('bg-', 'text-')}`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-1.5 rounded-full bg-gradient-to-r ${colors.bar} transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white dark:border-t-gray-900" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
