const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
      path: require.resolve("path-browserify"),
      util: require.resolve("util/"),
      process: require.resolve("process/browser"),
      // add other needed fallbacks
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    }),
  ],
};
