/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {boxShadow: {
      'custom': '0px 0px 10px #00000015',
    },borderRadius: {
      'custom-radius': '15px 15px 0px 0px',
    }
  },
  },
  plugins: [],
}

