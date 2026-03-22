import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Github, Languages } from 'lucide-react';

const About = () => {
  const { about, email, linkedin, github, languages } = portfolioData.personal;

  const highlights = [
    { icon: <Mail className="text-secondaryGreen" />, title: 'Email', value: email, link: `mailto:${email}` },
    { icon: <Linkedin className="text-[#0077b5]" />, title: 'LinkedIn', value: linkedin.replace('https://', ''), link: `https://${linkedin}` },
    { icon: <Github className="text-slate-700 dark:text-gray-300" />, title: 'GitHub', value: github.replace('https://', ''), link: `https://${github}` },
    { icon: <Languages className="text-primaryGreen" />, title: 'Languages', value: languages.join(' · '), link: null },
  ];

  return (
    <section className="py-12 relative bg-lightBg dark:bg-darkBg/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans inline-block relative group">
            <span className="gradient-text">About Me</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primaryGreen to-secondaryGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          
          <motion.div
            className="flex-1 space-y-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base md:text-lg text-slate-700 dark:text-gray-300 leading-relaxed font-light">
              {about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-300 dark:border-white/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:border-primaryGreen/40 hover:-translate-y-0.5 transition-all">
                  <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-md flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs text-slate-500 dark:text-gray-400 font-medium uppercase tracking-wide">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-900 dark:text-white font-semibold hover:text-primaryGreen transition-colors truncate block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-900 dark:text-white font-semibold truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primaryGreen to-secondaryGreen blur-2xl opacity-25 scale-105" />
              {/* Photo */}
              <div className="relative w-56 h-64 md:w-64 md:h-72 rounded-2xl p-[3px] bg-gradient-to-tr from-primaryGreen via-secondaryGreen to-lightGreen shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="R. P. Abhijith"
                  className="w-full h-full rounded-2xl object-cover object-top"
                />
              </div>
              {/* Name card below photo */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-darkBg border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 shadow-lg whitespace-nowrap">
                <p className="text-xs font-bold text-slate-900 dark:text-white text-center">R. P. Abhijith</p>
                <p className="text-xs text-primaryGreen font-mono text-center">Software Engineer</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
