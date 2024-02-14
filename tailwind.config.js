/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/*.{html, js}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				Archivo: 'Archivo',
			},
			fontWeight: {
				900: '900',
			},
			flexBasis: {
				31: '31%',
				48: '48%',
			},
			spacing: {
				75: '75px',
			},
		},
	},
	plugins: [],
};
