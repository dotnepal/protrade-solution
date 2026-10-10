import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#3E2723',
        latte: '#8D6E63',
        cream: '#F5F1EE',
        caramel: '#D97706',
        'caramel-dark': '#B35905',
        charcoal: '#1F2937',
        'warm-beige': '#ECDCC8',
      },
      fontFamily: {
        sans: ['"Libre Franklin"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
