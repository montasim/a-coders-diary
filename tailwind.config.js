module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#22577E',
          secondary: '#5584AC',
          accent: '#95D1CC',
          neutral: '#06113C',
          'base-100': '#ffffff',
          info: '#141E27',
          success: '#A5BECC',
          warning: '#FBBD23',
          error: '#EB5353',
        },
      },
      'light',
      'cupcake',
    ],
  },
  plugins: [
    require('daisyui', '@tailwindcss/forms')
  ],
}