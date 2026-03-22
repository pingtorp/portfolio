import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { portfolioData } from '../data/portfolioData';
import FloatingShape from './three/FloatingShape';
import ParticleField from './three/ParticleField';
import { ArrowDown } from 'lucide-react';

const AnimatedCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  return <>{count}</>;
};

const Hero = () => {
  const { name, role, tagline } = portfolioData.personal;
  const stats = portfolioData.stats;
  
  // Degrade 3D for low-end devices
  const [isLowEnd, setIsLowEnd] = useState(false);
  useEffect(() => {
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
      setIsLowEnd(true);
    }
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-lightBg dark:bg-darkBg">
      {/* Particle Effect Layer */}
      {!isLowEnd && <ParticleField />}

      {/* 3D Model Layer */}
      {!isLowEnd && (
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <FloatingShape />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Hero Content Layer */}
      <div className="z-10 relative text-center px-4 max-w-5xl mx-auto flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Open to Work badge */}
          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryGreen/40 bg-primaryGreen/10 text-primaryGreen dark:text-secondaryGreen text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primaryGreen animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <h2 className="text-base md:text-xl font-medium text-slate-700 dark:text-gray-300 tracking-wide mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            <span className="gradient-text font-sans">
              {name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="animate-pulse text-primaryGreen">|</span>
          </h1>

          <motion.h3
            className="text-xl md:text-3xl font-semibold text-slate-800 dark:text-white/90 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {role}
          </motion.h3>
          <motion.p
            className="text-base md:text-lg text-slate-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {tagline}
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-2.5 rounded-md bg-gradient-to-r from-primaryGreen to-secondaryGreen text-slate-900 font-bold text-base hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf" download
            className="glow-border px-7 py-2.5 rounded-md bg-lightBg dark:bg-darkBg text-slate-900 dark:text-white border border-slate-300 dark:border-white/20 font-bold text-base hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl border-t border-slate-300 dark:border-white/10 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-secondaryGreen tracking-tight mb-0.5">
                <AnimatedCounter end={stat.num} duration={2.5} />
                {stat.label.includes('Rate') ? '%' : '+'}
              </span>
              <span className="text-xs md:text-sm text-slate-600 dark:text-gray-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3, duration: 1.5, repeat: Infinity }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="text-primaryGreen w-6 h-6" />
      </motion.div>
    </div>
  );
};

export default Hero;
