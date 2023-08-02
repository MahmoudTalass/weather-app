const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  devtool: "inline-source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
