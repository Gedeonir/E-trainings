/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // fontFamily: {
    //   'custom': ['Krona One', 'sans-serif'],
    // },
    colors:{
      primary:'#47a5ad',
      secondary:'#f9fafb',
      btn_primary:"#ffffff",
      danger:"#dc3545",
      text_secondary:'#6b7280',
      text_secondary_2:"#d1d5db"
    }
  },
  
}
