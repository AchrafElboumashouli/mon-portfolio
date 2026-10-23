/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode
        ground:  '#F8FAFC',
        surface: '#FFFFFF',
        border:  '#E2E8F0',
        ink:     '#0F172A',
        ink2:    '#475569',
        ink3:    '#94A3B8',
        accent:  '#4F46E5',
        'accent-lo': '#EEF2FF',
        // Dark mode
        'dark-ground':  '#0B0F1A',
        'dark-surface': '#111827',
        'dark-border':  '#1E2640',
        'dark-ink':     '#F1F5F9',
        'dark-ink2':    '#94A3B8',
        'dark-ink3':    '#475569',
        'dark-accent':  '#818CF8',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
