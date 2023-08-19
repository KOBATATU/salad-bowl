const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      xs: '0.85rem',
      sm: '1rem',
      base: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
    }
  },
  plugins: [],
})
