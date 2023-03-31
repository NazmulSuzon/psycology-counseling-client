/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        zenistatheme:{
          primary: '#B07AB4',
          secondary: '#4B4D75',
          accent: '#8889ac'
        }
      }
    ]
  },
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
}
