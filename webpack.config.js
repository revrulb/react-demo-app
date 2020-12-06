const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./Sources/index.tsx",
    output: {
        path: path.join(__dirname, "/Transpiled"),
        filename: "react_spa_bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, "index.html"),
        filename: "index.html"
    })],
    module: {
        rules: [
            { test: /.tsx?$/, loader: "ts-loader" }
        ]
    },
    devServer: {
        contentBase: ["Transpiled"]
    }
};