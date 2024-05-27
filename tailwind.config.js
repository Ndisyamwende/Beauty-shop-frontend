/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        md: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        "dark-mode": "#A6603A",
        "light-mode": "#efe3b8",
        "dark-text": "#FFF",
        "light-text": "#000"
        
      },
      fontFamily: {
        body: "Open Sans",
      },
    },
  },
  plugins: [],
};

