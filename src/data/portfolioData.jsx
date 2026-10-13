/* EDIT DATA */
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaJira, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPhp, SiMongodb, SiSelenium, SiApachekafka, SiPostgresql, SiClaude, SiTradingview } from 'react-icons/si';
import { TbPlugConnected, TbApi, TbRobot, TbBrain } from 'react-icons/tb';

export const portfolioData = {
  personal: {
    name: "R. P. Abhijith",
    role: "Senior Software Engineer · React.js · AI-First Engineering · FinTech",
    title: "Senior Software Engineer",
    headline: "I build real‑time FinTech interfaces — and ship them AI-first.",
    tagline: "4+ years turning complex, data-intensive workflows into fast, reliable React.js products — from live trading and backtesting platforms to banking and healthcare dashboards.",
    location: "Trivandrum, Kerala, India",
    current: { company: "Smart Touch AI", product: "ZENXO — AI trading & backtesting platform" },
    about: "I am a Senior Software Engineer with 4+ years of experience specializing in React.js, TypeScript, real-time web applications and AI-first software engineering. I build FinTech platforms for market data, strategy backtesting and live trading using WebSockets, Kafka and TradingView, and work hands-on with AI-agent-driven development using Claude Code — from architecture and implementation to testing, code review and production delivery.",
    email: "rpabhijith.dev@gmail.com",  // replace with your chosen portfolio email
    linkedin: "linkedin.com/in/abhijithrp",
    github: "github.com/pingtorp",
    languages: ["English", "Malayalam"],
  },
  stats: [
    { value: `${Math.floor((new Date() - new Date('2022-07-01')) / (1000 * 60 * 60 * 24 * 365))}+`, label: "Years shipping production software" },
    { value: "8", label: "Products & projects delivered" },
    { value: "40+", label: "Branches running dashboards I built" },
    { value: "60%", label: "Faster report analysis on a microfinance dashboard" }
  ],
  highlights: [
    {
      title: "Real-time FinTech interfaces",
      desc: "Strategy builders, backtesting and live-trading UIs wired to WebSockets, Kafka streams and TradingView charts."
    },
    {
      title: "AI-first engineering",
      desc: "Claude Code and multi-agent workflows across the SDLC — I own the architecture, validation and production quality."
    },
    {
      title: "Ownership & delivery",
      desc: "Led projects and a 4-member dev/QA team end to end — requirements, UI architecture, integration, testing and release."
    }
  ],
  skills: [
    { icon: <FaReact />, name: "React JS", category: "Frontend", level: 90 },
    { icon: <SiJavascript />, name: "JavaScript", category: "Frontend", level: 85 },
    { icon: <SiTypescript />, name: "TypeScript", category: "Frontend", level: 80 },
    { icon: <FaHtml5 />, name: "HTML/CSS", category: "Frontend", level: 95 },
    { icon: <FaBootstrap />, name: "Bootstrap", category: "Frontend", level: 90 },
    { icon: <FaNodeJs />, name: "Node JS", category: "Backend", level: 75 },
    { icon: <FaPython />, name: "Python", category: "Backend", level: 80 },
    { icon: <SiPhp />, name: "PHP", category: "Backend", level: 70 },
    { icon: <SiMongodb />, name: "MongoDB", category: "Database", level: 75 },
    { icon: <FaDatabase />, name: "SQL", category: "Database", level: 85 },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database", level: 80 },
    { icon: <TbPlugConnected />, name: "WebSocket", category: "Real-Time & APIs", level: 85 },
    { icon: <SiApachekafka />, name: "Kafka", category: "Real-Time & APIs", level: 75 },
    { icon: <TbApi />, name: "REST APIs", category: "Real-Time & APIs", level: 90 },
    { icon: <SiTradingview />, name: "TradingView", category: "Real-Time & APIs", level: 80 },
    { icon: <FaGitAlt />, name: "Git", category: "Tools & DevOps", level: 85 },
    { icon: <FaJira />, name: "Jira", category: "Tools & DevOps", level: 80 },
    { icon: <SiSelenium />, name: "Selenium", category: "Tools & DevOps", level: 75 },
    { icon: <TbBrain />, name: "OCR/ML", category: "ML/AI", level: 70 },
    { icon: <SiClaude />, name: "Claude Code", category: "ML/AI", level: 90 },
    { icon: <TbRobot />, name: "AI Agents / Multi-Agent", category: "ML/AI", level: 85 }
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Smart Touch AI, Trivandrum, Kerala",
      date: "Aug 2025 – Present",
      desc: "Primary UI Developer for ZENXO, an AI-powered platform for strategy creation, historical backtesting and live execution in real-market conditions, following an AI-first software engineering methodology.",
      bullets: [
        "Primary UI Developer for ZENXO — architected and developed the complete React.js frontend covering strategy configuration, backtesting workflows, real-time trading interfaces and live execution.",
        "Integrated the frontend with Java backend services, WebSockets, Kafka-based real-time data flows and TradingView charting to support data-intensive live-trading workflows.",
        "Follow an AI-first engineering methodology using Claude Code and codebase-aware AI agents — translating BRDs and designs into structured prompts and owning decisions from architecture through validation, testing and production delivery.",
        "Use multi-agent / swarm workflows across the SDLC for implementation, testing, code review, debugging and performance optimization, feeding defects back for correction and re-validation before deployment.",
        "Developed a short-term AI-based market price prediction model in Python to predict the next 1-minute price, evaluated with tick-by-tick NSE and BSE data and historical backtesting."
      ],
      tech: ["React JS", "TypeScript", "WebSocket", "Kafka", "TradingView", "Java Integration", "Python", "Claude Code", "AI Agents"]
    },
    {
      role: "Software Engineer",
      company: "Trizent Technologies Pvt. Ltd, Trivandrum, Kerala",
      date: "July 2022 – July 2025 (3 years)",
      desc: "Developed production web applications and reusable UI components with React.js, leading selected projects and coordinating a 4-member development/QA team across finance, laboratory and healthcare use cases.",
      bullets: [
        "Developed production web applications and reusable UI components using React.js, JavaScript, HTML, CSS and Bootstrap, with REST API and backend integration.",
        "Led selected projects and coordinated a 4-member development/QA team, handling implementation, debugging, testing, client feedback, Git workflows and technical documentation.",
        "Developed business applications and dashboards supporting 40+ branches, 2,000+ customer records and 1,000+ patients/clinics across finance, laboratory and healthcare use cases.",
        "Optimized UI rendering, asynchronous data fetching and responsive workflows to improve application performance and user experience.",
        "Worked across the development lifecycle including UI architecture, API integration, testing, bug fixing, production support and client requirement implementation."
      ],
      tech: ["React JS", "TypeScript", "SQL", "Node JS", "PHP", "HTML", "CSS", "Bootstrap", "Tesseract OCR", "MongoDB", "Git", "JIRA", "Mantis"]
    },
    {
      role: "Software Tester Intern",
      company: "Trizent Technologies Pvt. Ltd, Trivandrum, Kerala",
      date: "Sep 2021 – Oct 2021",
      desc: "Collaborated with industry experts on automated testing projects and assisted testers in automated bug analysis on live websites.",
      bullets: [
        "Collaborated with industry experts on projects in Selenium Python, Robot Framework, and openpyxl.",
        "Assisted testers in automated bug analysis on live websites."
      ],
      tech: ["Selenium Python", "Robot Framework", "openpyxl"]
    },
    {
      role: "Embedded Systems Intern",
      company: "Infox Solutions, Ernakulam, Kerala",
      date: "June 2019",
      desc: "Developed, tested, and debugged embedded systems firmware using C and C++ programming languages under industry expert guidance.",
      bullets: [
        "Developed, tested, and debugged embedded systems firmware using C and C++ programming.",
        "Underwent knowledge delivery sessions on embedded systems by industry experts."
      ],
      tech: ["C", "C++", "Embedded Systems"]
    }
  ],
  projects: [
    {
      title: "ZENXO — AI Trading & Backtesting Platform",
      role: "Primary UI Developer · Smart Touch AI",
      desc: "AI-powered platform for strategy creation, historical backtesting and live execution in real-market conditions, with a React.js frontend integrated with Java services, WebSockets, Kafka and TradingView.",
      bullets: [
        "Architected and developed the complete React.js frontend covering strategy configuration, backtesting workflows, real-time trading interfaces and live execution.",
        "Integrated the frontend with Java backend services, WebSockets, Kafka-based real-time data flows and TradingView charting for data-intensive trading workflows.",
        "Built with an AI-first methodology — Claude Code and multi-agent workflows for implementation, testing, code review and production delivery."
      ],
      metrics: "Strategy creation · Historical backtesting · Live execution",
      tech: ["React JS", "TypeScript", "WebSocket", "Kafka", "TradingView", "Claude Code"],
      github: null,
      demo: null,
      featured: true
    },
    {
      title: "AI-Based Market Price Prediction",
      role: "Model Developer · Smart Touch AI",
      desc: "Short-term AI-based model that predicts the next 1-minute market price from historical and market data, evaluated on tick-by-tick NSE and BSE data.",
      bullets: [
        "Developed a short-term AI-based market price prediction model in Python to predict the next 1-minute price from historical and market data.",
        "Worked with tick-by-tick NSE and BSE market data collected for model evaluation.",
        "Performed historical-data backtesting to assess prediction behavior."
      ],
      metrics: "1-minute horizon · Tick-by-tick NSE/BSE data · Historical backtesting",
      tech: ["Python", "Machine Learning", "NSE/BSE Market Data", "Backtesting"],
      github: null,
      demo: null,
      featured: true
    },
    {
      title: "Microfinance Banking WebApp",
      role: "UI Developer",
      desc: "Designed and deployed a real-time dashboard system for 40+ branch offices and 2,000+ customer records with responsive design and real-time data sync.",
      bullets: [
        "Designed and deployed a real-time dashboard system for 40+ branch offices and 2,000+ customer records.",
        "Enabled seamless operational planning with 10+ interactive charts and graphs, improving report analysis time by 60%.",
        "Enhanced user experience with responsive design and real-time data sync, leading to 30% reduction in decision latency for field officers and managers."
      ],
      metrics: "10+ charts · 60% faster reporting · 30% less decision latency",
      tech: ["React JS", "Chart.js", "SQL"],
      github: null,
      demo: null,
      featured: true
    },
    {
      title: "Lab Monitoring System",
      role: "Lead Developer",
      desc: "Led full-cycle development of a smart lab system for tracking microbiological plates and colony counts, collaborating with a team of 4 developers and QA testers.",
      bullets: [
        "Led full-cycle development of a smart lab system for tracking microbiological plates and colony counts.",
        "Increased lab process accuracy by 95% and reduced manual monitoring effort by over 75%.",
        "Collaborated with a team of 4 developers and QA testers to ensure stable deployment and post-launch maintenance."
      ],
      metrics: "95% accuracy · 75% manual effort reduced · Team of 4",
      tech: ["React JS", "SQL", "PGAdmin"],
      github: null,
      demo: null,
      featured: true
    },
    {
      title: "Pregnancy Care App",
      role: "UI & API Developer",
      desc: "Built an antenatal and postnatal pregnancy tracker web app used by 1,000+ patients and clinics, integrating UI with server-side logic for timely foetal development tracking.",
      bullets: [
        "Built an antenatal and postnatal pregnancy tracker web app used by 1,000+ patients and clinics.",
        "Developed 12+ responsive screens and designed 15+ normalized database tables.",
        "Integrated UI with server-side logic to ensure timely tracking of foetal development, improving engagement by 40%."
      ],
      metrics: "12+ screens · 15+ DB tables · 40% engagement boost",
      tech: ["PHP", "SQL", "HTML", "CSS", "Bootstrap"],
      github: null,
      demo: null,
      featured: false
    },
    {
      title: "ARM VFP Asset Tracker",
      role: "UI Developer",
      desc: "Developed asset tracking dashboards handling real-time status updates for 500+ assets with theme-based UI enhancements and performance optimizations.",
      bullets: [
        "Developed asset tracking dashboards handling real-time status updates for 500+ assets.",
        "Implemented theme-based UI enhancements and resolved performance bottlenecks, resulting in 25% faster rendering times.",
        "Pushed updates to pre-production with hands-on testing and feedback loop coordination."
      ],
      metrics: "500+ assets tracked · 25% faster rendering",
      tech: ["React JS", "HTML", "CSS", "OneUI"],
      github: null,
      demo: null,
      featured: false
    },
    {
      title: "Oracle JET Analytics App",
      role: "UI Developer",
      desc: "Designed and developed 10+ analytical dashboard screens for microfinance data analysis, boosting loading speed by 25% through async data fetching and clean backend integration.",
      bullets: [
        "Designed and developed 10+ analytical dashboard screens for microfinance data analysis.",
        "Boosted dashboard loading speed by 25% through performance optimization and asynchronous data fetching.",
        "Ensured clean integration with backend services and maintained consistent UX across all modules."
      ],
      metrics: "10+ dashboards · 25% load speed boost via async fetching",
      tech: ["OJET", "Node JS", "HTML", "CSS"],
      github: null,
      demo: null,
      featured: false
    },
    {
      title: "Amazon Review Sentiment Analyser",
      role: "Model Developer",
      desc: "Created a review classifier tool for Amazon products using live data scraping and NLP-based sentiment analysis with automated SMTP email reporting.",
      bullets: [
        "Created a review classifier tool for Amazon products using live scraping and sentiment analysis.",
        "Processed 5,000+ reviews using NLP pipelines, achieving 88% classification accuracy into positive, neutral, or negative sentiments.",
        "Delivered detailed email reports using automated SMTP workflows with >90% user delivery success."
      ],
      metrics: "5,000+ reviews · 88% accuracy · >90% email delivery",
      tech: ["Python", "NLP", "Linear Regression", "SMTP"],
      github: "https://github.com/pingtorp",
      demo: null,
      featured: false
    }
  ],
  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "College of Engineering Aranmula, Pathanamthitta",
      year: "2018–2022",
      score: "8.2 CGPA",
      note: "Represented college at AI Fest 2.0 by Kerala Startup Mission. Active IEDC member (2018–19)."
    },
    {
      degree: "Higher Secondary – Science",
      institution: "Govt. H.S.S, Konni, Pathanamthitta",
      year: "2018",
      score: "92%",
      note: ""
    },
    {
      degree: "High School – SSLC",
      institution: "Republican V.H.S.S, Konni, Pathanamthitta",
      year: "2016",
      score: "Full A+",
      note: ""
    }
  ],
  achievements: [
    {
      icon: "🥇",
      title: "Rashtrapati Award",
      org: "Excellent performance in Bharat Scouts",
      year: "2017"
    },
    {
      icon: "🛡️",
      title: "Chief Minister's Shield",
      org: "Outstanding scouting – Bharat Scouts",
      year: "2019"
    },
    {
      icon: "🤝",
      title: "District Collector Award",
      org: "Service during Covid-19 Relief activities",
      year: "2020"
    }
  ]
};
