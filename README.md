# R. P. Abhijith - Personal Portfolio

A modern, fully responsive 3D animated personal portfolio website built with React JS, Three.js, Framer Motion, GSAP, and Tailwind CSS.

## 🚀 Features

- **3D Hero Section**: Interactive 3D shapes using React Three Fiber and tsParticles.
- **Micro-Interactions**: Hover effects, 3D CSS flip cards, VanillaTilt cards.
- **Animations**: Comprehensive scroll animations and page transitions using Framer Motion.
- **Dark Mode**: Fully styled modern dark-mode-first aesthetic with glassmorphism.
- **Scroll Spy & Navigation**: Smooth scrolling with active navbar section highlighting.
- **Fully Responsive**: Mobile-first approach optimized for all screen sizes.

## 🛠️ Tech Stack

- **React JS** (Vite)
- **Three.js + React Three Fiber**
- **@react-three/drei**
- **Framer Motion**
- **react-tsparticles**
- **Tailwind CSS**
- **React Router DOM**
- **react-tilt**, **react-countup**

## 💻 Setup Instructions

1. **Clone the repository** (if applicable) or navigate to the source directory:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
   *Note: Using `--legacy-peer-deps` is recommended due to potential React 19 dependency configurations in `@react-three/fiber`.*

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## ✏️ Customization

All personal information, experience, projects, skills, education, and achievements are driven centrally by `src/data/portfolioData.js`. 
You can edit this file to instantly update your portfolio content without modifying the UI components.
