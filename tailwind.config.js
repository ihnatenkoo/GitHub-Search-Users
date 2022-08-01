const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sml: '575px',
      xl: '1280px',
    },
    extend: {
      gridTemplateRows: {
        layout195px: 'repeat(2, minmax(195px, 1fr))',
      },
      keyframes: {
        in: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        in: 'in .4s ease-in-out',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addUtilities, theme }) => {
      addComponents({
        '.background-gradient-gray': {
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 1%, rgba(0, 0, 0, 0) 100%)',
        },
        '.position-absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.transition-all-25': {
          transition: 'all .25s linear',
        },
        '.text-404': {
          fontSize: '25vh',
          fontWeight: 'bold',
          fontFamily: 'Helvetica',
          textShadow:
            '0 0.005em 0 #ccc, 0 0.01em 0 #c9c9c9, 0 0.015em 0 #bbb, 0 0.02em 0 #b9b9b9, 0 0.025em 0 #aaa, 0 0.03em 0.005em rgba(0, 0, 0, 0.1), 0 0 0.025em rgba(0, 0, 0, 0.1), 0 0.005em 0.015em rgba(0, 0, 0, 0.3), 0 0.015em 0.025em rgba(0, 0, 0, 0.2), 0 0.025em 0.05em rgba(0, 0, 0, 0.25), 0 0.05em 0.05em rgba(0, 0, 0, 0.2), 0 0.1em 0.1em rgba(0, 0, 0, 0.15)',
        },
      });
    }),
  ],
};
