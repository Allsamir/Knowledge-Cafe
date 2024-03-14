/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gray': "rgba(17, 17, 17, 0.05)",
      'black': "#000",
      'white': "#fff",
      'purple': "#6047EC"
    }
  },
  plugins: [daisyui],
}