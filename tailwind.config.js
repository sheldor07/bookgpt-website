/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./books/**/*.{js,ts,jsx,tsx}",
    "./[bookName]/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],  

  theme: {
    extend: {
      colors: {
        "gradient-blue": "#007CF0",
        "gradient-purple": "#00DFD8",
      },
    },
  },
  darkMode: false,
}