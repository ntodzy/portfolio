/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        'badgerred': "#C5050C",
      },

      textColor: {
        'white': '#ffffff',
        'black': '#000000',
        'gray': '#333333',
      },
    },
  },
  plugins: [],
}

