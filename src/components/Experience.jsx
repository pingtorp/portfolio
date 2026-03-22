import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section className="py-12 relative bg-lightBg dark:bg-darkBg/95">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primaryGreen/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans inline-block relative group">
            <span className="gradient-text">Experience Timeline</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-lightGreen to-primaryGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primaryGreen via-secondaryGreen to-transparent opacity-30 rounded-full"></div>

          <div className="space-y-6 md:space-y-0">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'} mb-4 md:mb-10`}>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-lightBg dark:bg-darkBg border-4 border-secondaryGreen items-center justify-center z-20 shadow-[0_0_15px_rgba(93,217,184,0.6)]">
                    <Briefcase size={12} className="text-secondaryGreen" />
                  </div>

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[45%] rounded-xl"
                  >
                    <div className="p-5 md:p-6 rounded-xl relative overflow-hidden group border border-slate-200 dark:border-white/10 hover:border-primaryGreen/60 bg-white/70 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">

                      <div className="relative z-10">
                        <span className="text-primaryGreen dark:text-secondaryGreen font-mono text-xs block mb-2">{exp.date}</span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-0.5">{exp.role}</h3>
                        <h4 className="text-sm text-slate-600 dark:text-gray-400 font-medium mb-3">{exp.company}</h4>

                        {exp.bullets && exp.bullets.length > 0 ? (
                          <ul className="space-y-1.5 mb-4">
                            {exp.bullets.map((point, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300 leading-relaxed">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primaryGreen flex-shrink-0"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-slate-700 dark:text-gray-300 mb-4 font-light leading-relaxed">{exp.desc}</p>
                        )}

                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/10">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-darkBg/80 border border-slate-300 dark:border-white/15 text-slate-700 dark:text-gray-300 group-hover:border-primaryGreen/50 group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
