module.exports = {
    devtool: 'inline-source-map',
    entry: {
        entry: __dirname + '/src/CssBuilder.js'
    },
    output: {
        filename: 'CssBuilder.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    
                    {
                        "loader": "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                          modules: true,
                          importLoaders: 1,
                          localIdentName: "[name]_[local]_[hash:base64]",
                          sourceMap: true
                        }
                      }
                ]
            }
        ]
    }
};