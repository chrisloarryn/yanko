/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "construction-primary": "#1e8e6c",
        "construction-secondary": "#d97706",
        "construction-surface": "#ecf5ec",
        "construction-neutral": "#1f2937",
      },
      spacing: {
        "9/16": "9px / 16px",
      },
      borderRadius: {
        "lg": "0.75rem",
      },
      fontSize: {
        "h1": "2.5rem",
        "h3": "1.5rem",
      },
    },
  },
  plugins: [],
}