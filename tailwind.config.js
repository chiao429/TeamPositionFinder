/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        xmas: {
          deepGreen: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#a7d8a8',
            300: '#4d7c5f',
            400: '#2d5a3d',
            500: '#1e4029',
            600: '#163320',
            700: '#0f2618',
            800: '#0a1a10',
            900: '#051008',
          },
          deepRed: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fca5a5',
            300: '#dc2626',
            400: '#991b1b',
            500: '#7f1d1d',
            600: '#5c1515',
            700: '#450a0a',
            800: '#2d0808',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#f59e0b',
            500: '#d97706',
            600: '#b45309',
            700: '#92400e',
          },
          warmYellow: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fbbf24',
            400: '#f59e0b',
          },
        },
      },
    },
  },
  plugins: [],
}
