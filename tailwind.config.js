const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': '#FFFFFF',
				'secondary-light': '#F8F9FA',
				'ternary-light': '#E9ECEF',
				'accent-light': '#2563EB',
				'text-primary-light': '#1A1A1A',
				'text-secondary-light': '#6B7280',

				'primary-dark': '#0A0A0A',
				'secondary-dark': '#1A1A1A',
				'ternary-dark': '#2A2A2A',
				'accent-dark': '#3B82F6',
				'text-primary-dark': '#F9FAFB',
				'text-secondary-dark': '#9CA3AF',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['JetBrains Mono', 'Courier New', 'monospace'],
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '6rem',
					'2xl': '8rem',
				},
				center: true,
			},
			maxWidth: {
				'8xl': '88rem',
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: ['@tailwindcss/forms'],
};
