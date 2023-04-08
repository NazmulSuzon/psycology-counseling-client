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
          accent: '#8889ac',
          neutral:'#5A5C82'
        }
      }
    ]
  },
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
}
