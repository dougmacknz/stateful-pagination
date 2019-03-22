const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    library: "StatefulPagination",
    libraryTarget: "umd"
  },
  externals: [
    {
      react: {
        root: "React",
        amd: "react",
        commonjs: "react",
        commonjs2: "react"
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
