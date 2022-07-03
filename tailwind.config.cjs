const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['halloween']
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
