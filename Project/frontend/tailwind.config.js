/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      background: "var(--color-background)",
      card: "var(--color-card-bg)",
      error: "var(--color-error)",
    },
    fontFamily: {
      sans: ['Outfit', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
},

  plugins: [],
}
