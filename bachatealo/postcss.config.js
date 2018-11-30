module.exports = {
  plugins: [
    require('postcss-apply'),
    require('postcss-import'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
        flexbox: false,
      },
      features: {
        'nesting-rules': true,
      },
      preserve: false,
    }),
  ],
};
