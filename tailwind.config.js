/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      colors:{
        primary: "#9B4A50",      // Muted Rosewood
        secondary: "#F5EFE7",    // Almond Milk
        accent: "#716F3E",       // Moss Green
        highlight: "#BDA453",    // Old Gold
        textcolor: "#2D2C2A"     // Warm Charcoal
      }
    },
  },
  plugins: [],
}
