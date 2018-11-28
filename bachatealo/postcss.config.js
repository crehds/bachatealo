module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
        flexbox: false,
      },
      preserve: false,
    }),
  ],
};
