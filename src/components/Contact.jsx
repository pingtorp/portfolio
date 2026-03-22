import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  const { email, linkedin } = portfolioData.personal;

  const contactOptions = [
    { icon: <Mail size={20} />, title: 'Email', value: email, link: `mailto:${email}` },
    { icon: <Linkedin size={20} />, title: 'LinkedIn', value: linkedin.replace('https://', ''), link: `https://${linkedin}` },
  ];

  return (
    <section className="py-12 relative bg-lightBg dark:bg-darkBg/95">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-sans inline-block relative group">
            <span className="gradient-text">Get In Touch</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primaryGreen to-secondaryGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </h2>
          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            I'm currently open to new opportunities. Feel free to reach out via any of the channels below.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
        >
          {contactOptions.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:border-primaryGreen/50 hover:shadow-[0_0_16px_rgba(16,185,129,0.1)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-primaryGreen dark:text-secondaryGreen flex-shrink-0 group-hover:bg-primaryGreen/10 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide font-semibold text-slate-400 dark:text-gray-500 mb-0.5">{item.title}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-800 dark:text-white hover:text-primaryGreen dark:hover:text-secondaryGreen transition-colors truncate block"
                    title={item.value}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-slate-800 dark:text-white truncate block" title={item.value}>
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-primaryGreen/10 to-secondaryGreen/10 border border-primaryGreen/20"
        >
          <span className="text-3xl">🚀</span>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">Let's build something great together.</h4>
            <p className="text-slate-600 dark:text-gray-400 text-sm">Open for freelance and full-time roles.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
