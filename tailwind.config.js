/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customDark: "#29272a",
      },
      animation: {
        typing: 'typing 2s steps(8) 1 normal both, blink 0.75s step-end infinite',
        blink: 'blink 1s step-end infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      keyframes: {
        typing: {
          'from': { width: '0ch' },
          'to': { width: '8ch' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },
    },
  },
  plugins: [],
}

