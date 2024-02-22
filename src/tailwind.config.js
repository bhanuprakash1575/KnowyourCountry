/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'calc': 'calc(100vh - 72px)',
      },
    },
  },
  plugins: [],
}