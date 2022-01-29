const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },

    mode: "development",
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
                test: /\.js$|jsx/,
                use: ["babel-loader"]
            },

            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },

            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
                type: 'asset/resource',
            },
        ]
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },

        open: true,
        liveReload: true,
        port: 8080,
        historyApiFallback: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            images: path.resolve(__dirname, 'src/images'),
            redux_main: path.resolve(__dirname, 'src/redux'),
        }
    }
}