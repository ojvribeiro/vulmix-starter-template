/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Built-in templates
    './node_modules/vulmix/src/**/pages/**/*.{vue,js}',
    './node_modules/vulmix/src/**/components/**/*.{vue,js}',
    './node_modules/vulmix/src/**/layouts/**/*.{vue,js}',

    // User templates
    './app.vue',
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
