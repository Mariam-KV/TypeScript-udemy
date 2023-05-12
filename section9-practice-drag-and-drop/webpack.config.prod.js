const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/app.ts",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "js"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
