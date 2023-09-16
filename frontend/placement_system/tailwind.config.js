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
        'dusk-brown':'#816749',
        'chocolate-brown':'#58422D',
        'custom-grey':'#7A7A77',
        'bg-color-secondary':'#A48C74',
      },
      fontFamily:{
        abc:['Inknut Antiqua','serif']
      },
    
    },
  },
  plugins: [],
}

