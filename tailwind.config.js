/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		container: {
  			center: 'true',
  			padding: '1rem'
  		},
  		colors: {
  			'custom-blue': '#3074F0',
  			'custom-dark': '#212328',
  			'custom-gray': '#454545'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
