/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: 'var(--feedget-brand-300)',
          500: 'var(--feedget-brand-500)',
        },
        'on-brand': {
          100: 'var(--feedget-text-on-brand)',
        },
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [ 
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
  important: true,
}

