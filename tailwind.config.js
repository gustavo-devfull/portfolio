/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: false, // agora tudo é fixo dark
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	theme: {
	  container: {
	    center: true,
	    padding: '2rem',
	    screens: {
		 '2xl': '1400px',
	    },
	  },
	  extend: {
	    colors: {
		 background: '#111827',
		 foreground: '#f9fafb',
		 primary: '#6366f1',
		 'primary-foreground': '#f9fafb',
		 muted: '#1f2937',
		 'muted-foreground': '#d1d5db',  // contraste melhorado!
		 border: '#374151',
		 input: '#374151',
		 ring: '#6366f1',
		 destructive: '#dc2626',
		 'destructive-foreground': '#f9fafb',
		 accent: '#374151',
		 'accent-foreground': '#f9fafb',
		 popover: '#1f2937',
		 'popover-foreground': '#f9fafb',
		 card: '#1f2937',
		 'card-foreground': '#f9fafb',
	    },
	  },
	},
	plugins: [require('tailwindcss-animate')],
   };
   