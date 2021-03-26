module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-apply'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
        flexbox: false,
      },
      features: {
        'nesting-rules': true,
        'custom-media-queries': {
          preserve: true,
        },
      },
      preserve: false,
    }),
    require('css-mqpacker'),
  ],
};
