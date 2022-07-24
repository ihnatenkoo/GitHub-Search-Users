const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sml: '575px',
      xl: '1280px'
    },
    extend: {
      keyframes: {
        in: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' }
        }
      },
      animation: {
        in: 'in .4s ease-in-out'
      }
    }
  },
  plugins: [
    plugin(({ addComponents, addUtilities, theme }) => {
      addComponents({
        '.background-gradient-gray': {
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 1%, rgba(0, 0, 0, 0) 100%)'
        },
        '.position-absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        },
        '.transition-all-03': {
          transition: 'all .25s linear'
        }
      });
    })
  ]
};
