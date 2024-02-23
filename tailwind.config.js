/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: '#1557FF',
				black: '#14151A',
				gray: '#B3B3B3',
				card: '#F4F4F4',
				gradient: 'linear-gradient(90deg, #F4F4F4 100%, #FEFEFE 100%)',
				white99: '#fafafa',
				white: '#FFFFFF',
				gray1: 'rgba(15, 19, 36, 0.6)',
				gray2: 'rgba(244,244,244,1)'
			},
			backgroundImage: {
				pattern: "url('./assets/img/pattern.png')",
				pattern3: "url('./assets/img/pattern3.png')",
				pattern2: "url('./assets/img/pattern2.png')",
				'white-gradient': 'linear-gradient(90deg, #F4F4F4 100%, #FEFEFE 100%)',
				vector: "url('./assets/img/vector.png')",
				vector50: "url('./assets/img/vector50.png')",
				cwhite: 'linear-gradient(180deg, #F4F4F4 0%, #FFFFFF 100%)'
			},
			boxShadow: {
				bottom: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
			}
		}
	},
	plugins: []
}
