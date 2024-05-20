/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        victor: ['Victor Mono'],
        quick: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'inset-custom': 'inset 0 6px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
