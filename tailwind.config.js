/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "mydarkblue": '#060614',
      },
      textColor:{
        "mydarkpurple": '#2F2F45',
      },
      fontFamily: {
        "ibmsans":  "'IBM Plex Sans', sans-serif",
        'sansita': "'Sansita Swashed', sans-serif",
      },
      gridTemplateColumns:{
        'autofit': 'repeat(auto-fit, minmax(500px, 1fr))'
      }
    },
  },
  plugins: [],
}