module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/index.html',
  ],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.875rem', // Tailwind's 3xl border radius
      },
      // Add other premium styles here
    },
  },
  plugins: [],
};