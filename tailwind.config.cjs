/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.svelte'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				neutral: {
					light: '#FFFFFF',
					dark: '#1C1A1D'
				},
				primary: {
					light: '#69609B',
					dark: '#796ADE',
					400: '#3D3A4E'
				},
				contrast: {
					light: '#000000',
					light80: '#000000CC',
					light40: '#00000066',
					light20: '#00000033',

					dark: '#FFFFFF',
					dark80: '#FFFFFFCC',
					dark40: '#FFFFFF66',
					dark20: '#FFFFFF33'
				}
			},
			fontFamily: {
				sans: ['Noto Sans'],
				mono: ['Fira Code'],
				ibm: ['IBM Plex Sans']
			}
		}
	},
	plugins: []
};
