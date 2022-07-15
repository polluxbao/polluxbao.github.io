/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'pop': '#CD651A',
      },
      backgroundImage:{
        'admin-dashboard': "url('/src/images/admin-dashboard.png')",
        'todo-img': "url('/src/images/todo.png')",
        'weather-img': "url('/src/images/weather.png')",
        'library-img': "url('/src/images/library.png')",

        
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  darkMode: false,
  plugins: [],
}
