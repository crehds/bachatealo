module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
        flexbox: false,
      },
      preserve: false,
    }),
  ],
};
