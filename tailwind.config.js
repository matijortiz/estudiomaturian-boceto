/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maturian-gray': '#1a1a1a',
        'maturian-cream': '#f5f5f0',
        'maturian-salmon': '#ff8c69',
      },
    },
  },
  plugins: [],
}