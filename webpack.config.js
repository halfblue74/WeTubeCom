const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const Mode = process.env.Webpack_Env;

const Entry_File = path.resolve(__dirname, "assets", "js", "main.js");
const Output_Dir = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", Entry_File],
  mode: Mode,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
    rules: [
      {
        test: /\.(scss)$/,
        use: ExtractCSS.extract([
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
                return [autoprefixer({ overrideBrowserslist: "cover 99.5%" })];
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ]),
      },
    ],
  },
  output: {
    path: Output_Dir,
    filename: "[name].js",
  },
  plugins: [new ExtractCSS("styles.css")],
};

module.exports = config;
