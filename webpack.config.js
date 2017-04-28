module.exports = {
    entry: ["./index.js"] ,
    output: {
        filename: 'bundle.js',
        sourceMapFilename: "bundle.js.map",
    },
    debug: true,
    devtool: 'inline-source-map',
    module: {

      loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
      ]
    },

    resolve: {
      extensions: ['', '.js']
    }
}