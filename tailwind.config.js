module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
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
  plugins: []
};
