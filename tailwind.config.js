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
        // "dark-mode": "#A6603A",
        // "light-mode": "#F0E68C",

        "dark-mode": "#A6603A",
        "light-mode": "#efe3b8",
<<<<<<< HEAD
        "dark-text": "#FFF",
        "light-text": "#000"
        
=======
>>>>>>> 4a8fafa6f468f8ecd08f5ec6218a9537e6d0ed0f
      },
      fontFamily: {
        body: "Open Sans",
      },
    },
  },
  plugins: [],
};

