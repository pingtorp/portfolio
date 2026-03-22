import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateX: 45 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateX: 0,
      transition: { type: 'spring', mass: 1, damping: 10, stiffness: 100 }
    },
  };

  return (
    <section className="py-12 relative bg-lightBg dark:bg-darkBg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-lightGreen/10 to-transparent rounded-bl-full pointer-events-none blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans inline-block relative group">
            <span className="gradient-text">Honors & Awards</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-lightGreen to-primaryGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </h2>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col sm:flex-row items-center sm:items-stretch h-auto sm:h-20 glass rounded-xl border border-slate-300 dark:border-white/10 hover:border-lightGreen/50 overflow-hidden cursor-default transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.3)] hover:-translate-y-1"
            >
              {/* Icon Section */}
              <div className="w-full sm:w-20 flex items-center justify-center bg-slate-100 dark:bg-white/5 border-b sm:border-b-0 sm:border-r border-slate-300 dark:border-white/10 p-4 sm:p-0 group-hover:bg-primaryGreen/10 transition-colors">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-500 ease-in-out">{item.icon}</span>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center px-5 py-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primaryGreen transition-colors">{item.title}</h3>
                  <span className="text-primaryGreen font-mono text-xs inline-block px-2.5 py-0.5 bg-primaryGreen/10 rounded-full mt-1 sm:mt-0 w-max">{item.year}</span>
                </div>
                <p className="text-slate-600 dark:text-gray-400 text-sm font-medium font-sans w-full">{item.org}</p>
              </div>

              {/* Decorative line */}
              <div className="w-1 h-full bg-gradient-to-b from-transparent via-lightGreen to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
