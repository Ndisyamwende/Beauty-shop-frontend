/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        md: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        "dark-mode": "#A6603A",
        "light-mode": "#F0E68C",
      },
      fontFamily: {
        body: "Open Sans",
      },
    },
  },
  plugins: [],
};

