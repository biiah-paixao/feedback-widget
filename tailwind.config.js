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
        surface: {
          primary: 'var(--feedget-surface-primary)',
          secondary: 'var(--feedget-surface-secondary)',
          secondaryHover: 'var(--feedget-secondary-hover)',
        },
        stroke: 'var(--feedget-stroke)',
        text: {
          primary: 'var(--feedget-text-primary)',
          secondary: 'var(--feedget-text-secondary)',
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

