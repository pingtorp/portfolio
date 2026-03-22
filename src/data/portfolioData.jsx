/* EDIT DATA */
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaJira, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPhp, SiMongodb, SiSelenium } from 'react-icons/si';

export const portfolioData = {
  personal: {
    name: "R. P. Abhijith",
    role: "Software Engineer · React JS Specialist",
    tagline: "Building pixel-perfect, engaging, and accessible digital experiences.",
    about: "I am a passionate Software Engineer specialized in React JS with a knack for creating intuitive, dynamic user experiences. With over 3 years of experience spanning frontend, backend, and machine learning, I strive to build scalable products that solve real-world problems.",
    email: "rpabhijith.dev@gmail.com",  // replace with your chosen portfolio email
    linkedin: "linkedin.com/in/abhijithrp",
    github: "github.com/pingtorp",
    languages: ["English", "Malayalam"],
  },
  stats: [
    { num: Math.floor((new Date() - new Date('2022-07-01')) / (1000 * 60 * 60 * 24 * 365)), label: "Years Experience" },
    { num: 5, label: "Major Projects" },
    { num: 2000, label: "Active Users" },
    { num: 95, label: "Accuracy Rate" }
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
    { icon: <FaGitAlt />, name: "Git", category: "Tools & DevOps", level: 85 },
    { icon: <FaJira />, name: "Jira", category: "Tools & DevOps", level: 80 },
    { icon: <SiSelenium />, name: "Selenium", category: "Testing", level: 75 },
    { icon: <FaReact />, name: "OCR/ML", category: "ML/AI", level: 70 }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Trizent Technologies Pvt. Ltd, Trivandrum, Kerala",
      date: "July 2022 – July 2025 (3 years)",
      desc: "Proven track record as a Development Lead, overseeing the entire development lifecycle from inception to final deployment. Specializing in React.js, led innovative lab-based product development initiatives integrating cutting-edge technologies to ensure seamless user experiences.",
      bullets: [
        "Demonstrated adaptability by undertaking various roles: UI development, API design & development, team leadership, project testing, bug fixing, CSS resolution, web development, and seamless UI/backend integration.",
        "Proven track record as Development Lead — overseeing full lifecycle from inception to deployment, specializing in React.js lab-based products with cutting-edge technology integration.",
        "Served as Supervising Developer — overseeing and mentoring interns across projects, providing hands-on guidance to cultivate skills and foster growth in software development.",
        "Actively crafted user interfaces for client websites using HTML, CSS, Bootstrap, React.js, and PHP. Created responsive designs for mobile applications and developed prototypes for web projects."
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
      degree: "B.Tech (ECE/CSE)",
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
