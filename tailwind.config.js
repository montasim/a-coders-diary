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
          neutral: '#FAFFAF',
          'base-100': '#ffffff',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
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