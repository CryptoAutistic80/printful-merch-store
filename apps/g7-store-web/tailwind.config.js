const sharedContent = [
  './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
  '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
  '../../libs/**/*.{ts,tsx,js,jsx}',
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: sharedContent,
  theme: {
    extend: {
      colors: {
        ink: '#050608',
        slate: '#0F1115',
        accent: '#E40F43',
        steel: '#7F8EA3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
