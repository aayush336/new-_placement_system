/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors:{
        'bg-start-color': '#2193b0',
        'bg-end-color': '#6dd5ed',
        'bg-color-primary':'#e0e0e0',
        'dark-brown':'#231D13',
        'dusk-brown':'#b3844f',
        'chocolate-brown':'#58422D',
        'custom-grey':'#7A7A77',
        'bg-color-secondary':'#A48C74',

        'pink':'#e7717d',
        'brown':'#7e685a',
        'cinnamon': '#afd275',
        'grey':'#c2cad0',

        'english_blue':'#123c69',
        'english_red':'#ac3b61',

        'custom-blue':'#d2fdff',
        'custom-blue-heavy':'#b4dfe5',
        'custom-navy':'#303c8c',
        'custom-orange':'#f4976c',
        'custom-beigh':'#fbe8a6',


      },
      fontFamily:{
        abc:['Inknut Antiqua','serif']
      },
    
    },
  },
  plugins: [],
}

