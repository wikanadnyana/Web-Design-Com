/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#10B2F4',
        softblue: '#26B9F5',
        lightblue: '#85D9F8',
        secondary: '#64748b',
        dark: '#0f172a',
        background: '#F9FCFE',
        bgfooter: '#ECFDFE',
      },
      blur: {
        xxl: '300px',
      }
    },
  },
  plugins: [require("daisyui")],
}
