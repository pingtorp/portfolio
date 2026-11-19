import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Reveal } from './ui/Section';

const Contact = () => {
  const { email, linkedin, github, location } = portfolioData.personal;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const links = [
    { icon: Linkedin, label: 'LinkedIn', value: linkedin, href: `https://${linkedin}` },
    { icon: Github, label: 'GitHub', value: github, href: `https://${github}` },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-line">
      <div className="container-page">
        <Reveal className="card relative overflow-hidden px-6 py-12 sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,#000_10%,transparent_60%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/15 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <p className="eyebrow mb-4"><span className="text-accent">06</span> / Contact</p>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tightest text-fg text-balance">
                Let's build something people rely on.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                I'm open to senior frontend and full-stack engineering roles. Email is the fastest way to reach me.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={`mailto:${email}`} className="btn-primary">
                  <Mail size={16} /> {email}
                </a>
                <button onClick={copyEmail} className="btn-secondary" aria-live="polite">
                  {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>
            </div>

            <ul className="space-y-3">
              {links.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-line bg-bg/60 p-4 hover-lift"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-elevated text-fg">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-subtle">{label}</span>
                      <span className="block truncate text-sm font-medium text-fg">{value}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download="Abhijith_RP_Resume.pdf"
                  className="group flex items-center gap-4 rounded-xl border border-line bg-bg/60 p-4 hover-lift"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-elevated text-fg">
                    <Download size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-subtle">Resume · PDF</span>
                    <span className="block text-sm font-medium text-fg">Download full resume</span>
                  </span>
                </a>
              </li>
              <li className="px-1 pt-1 text-xs text-subtle">{location} · IST (UTC+5:30)</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
