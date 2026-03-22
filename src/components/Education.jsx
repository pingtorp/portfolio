import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  return (
    <section className="py-12 relative bg-lightBg dark:bg-darkBg/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans inline-block relative group">
            <span className="gradient-text">Education</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondaryGreen to-primaryGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group h-full"
            >
              {/* Outer glow effect that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primaryGreen to-secondaryGreen rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              
              <div className="glass h-full p-6 rounded-2xl border border-slate-300 dark:border-white/10 hover:border-secondaryGreen/40 transition-colors flex flex-col cursor-crosshair relative z-10 bg-lightBg dark:bg-darkBg/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primaryGreen/20 text-primaryGreen rounded-xl flex items-center justify-center border border-primaryGreen/30 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 text-xs font-mono rounded-full">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 leading-tight group-hover:text-primaryGreen transition-colors">{item.degree}</h3>
                <h4 className="text-sm text-slate-600 dark:text-gray-400 font-medium mb-4 relative pb-2">
                  {item.institution}
                  <div className="absolute left-0 -bottom-0 w-8 h-0.5 bg-secondaryGreen/50 group-hover:w-full transition-all duration-300"></div>
                </h4>

                <div className="mt-auto flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 dark:text-gray-500 uppercase tracking-widest font-semibold mb-0.5">Score</span>
                    <span className="text-xl font-bold text-secondaryGreen drop-shadow-[0_0_8px_rgba(93,217,184,0.5)]">
                      {item.score}
                    </span>
                  </div>
                </div>

                {item.note && (
                  <p className="mt-3 pt-3 border-t border-slate-300 dark:border-white/10 text-xs text-slate-600 dark:text-gray-400 font-light hidden md:block group-hover:text-slate-700 dark:group-hover:text-gray-300 transition-colors">
                    {item.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
