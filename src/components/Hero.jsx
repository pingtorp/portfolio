import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ease = [0.21, 0.47, 0.32, 0.98];
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

const Hero = () => {
  const { name, title, headline, tagline, location, current, email, linkedin, github } = portfolioData.personal;
  const { stats } = portfolioData;
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -28]);

  const socials = [
    { icon: Linkedin, href: `https://${linkedin}`, label: 'LinkedIn' },
    { icon: Github, href: `https://${github}`, label: 'GitHub' },
    { icon: Mail, href: `mailto:${email}`, label: 'Email' },
  ];

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-20">
      {/* Backdrop: masked grid + soft accent glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid mask-fade opacity-70" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <motion.div {...fadeUp(0)} className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to new opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
                <MapPin size={13} /> {location}
              </span>
            </motion.div>

            <motion.p {...fadeUp(0.05)} className="mb-3 text-base sm:text-lg font-medium text-muted">
              {name} — {title}
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tightest text-fg text-balance"
            >
              {headline}
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
              {tagline}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary group">
                View selected work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="/resume.pdf" download="Abhijith_RP_Resume.pdf" className="btn-secondary">
                <Download size={16} /> Download resume
              </a>
              <div className="ml-1 flex items-center gap-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full text-muted transition-all duration-200 hover:-translate-y-0.5 hover:bg-elevated hover:text-fg active:translate-y-0"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Portrait + current role */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            style={{ y: portraitY }}
            className="relative mx-auto w-full max-w-[22rem] transform-gpu will-change-transform lg:max-w-none"
          >
            <div className="card relative overflow-hidden p-2 shadow-2xl shadow-black/10 dark:shadow-black/40">
              <picture className="block">
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.jpeg"
                  alt={`Portrait of ${name}`}
                  className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                  fetchPriority="high"
                />
              </picture>
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-black/55 p-4 text-white backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Currently</p>
                <p className="mt-1 text-sm font-semibold">{title} @ {current.company}</p>
                <p className="mt-0.5 text-xs text-white/70">{current.product}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact stats */}
        <motion.dl
          {...fadeUp(0.4)}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl border border-line bg-line gap-px"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface p-5 sm:p-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg">{stat.value}</dd>
              <dd className="mt-1.5 text-xs sm:text-sm text-muted leading-snug">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
