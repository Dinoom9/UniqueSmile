/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: 'rgb(var(--background-start-rgb))',
          dark: 'rgb(34, 34, 34)', // צבע כהה לדוגמה
        },
        foreground: {
          light: 'rgb(var(--foreground-rgb))',
          dark: 'rgb(255, 255, 255)', // צבע בהיר לדוגמה
        },
      },
    },
  },
  darkMode: 'class', // מתן אפשרות למצב כהה
  plugins: [],
};

export default config;
