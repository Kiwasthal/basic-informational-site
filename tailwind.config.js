/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.{ html,js,css}', './views/*.ejs', './views/partial/*.ejs'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Rubik'],
      },
    },
  },
  plugins: [],
};
