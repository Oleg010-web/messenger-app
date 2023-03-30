/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          "whatsapp-1": "#00a884",
          "whatsapp-2": "#008069"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
