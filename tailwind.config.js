/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.tsx", "./components/**/*.tsx"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				regular: ["Outfit-Regular", "sans-serif"],
				semibold: ["Outfit-SemiBold", "sans-serif"],
				bold: ["Outfit-Bold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
