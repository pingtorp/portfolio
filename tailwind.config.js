/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightBg: '#f8fafc',
        darkBg: '#092014',
        primaryGreen: '#10b981',
        secondaryGreen: '#34d399',
        lightGreen: '#6ee7b7',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
// Trigger Vite Reload
