/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
		extend: {
			colors: {
			"primary": "#2ecc71",
			"secondary": "#27ae60",
			"midnight-blue": "#2c3e50",
			"wet-asphalt": "#34495e"
			}
		}
  },
  plugins: [],
}
