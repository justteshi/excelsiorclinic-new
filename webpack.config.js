const path = require('path')

module.exports = {
    entry: "./excelsiorclinic/frontend/src/index.js",
    output: {
        path: path.resolve(__dirname, "./excelsiorclinic/frontend/static/frontend"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
}