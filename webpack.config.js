const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
   mode: "development",
   entry: "/src/index.js", // main js
   output: {
      path: path.resolve(__dirname, "dist"), // output folder
      publicPath: "/",
   },
   module: {
      rules: [
         {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
               },
            },
         },
         {
            test: /\.(s[ac])?c?ss$/,
            use: [
               "style-loader",
               "css-loader",
               "sass-loader" // for styles
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./dist/index.html", // base html
      }),
   ],
   devtool:'eval-cheap-module-source-map',
   devServer: {
      historyApiFallback: true,
   }
};