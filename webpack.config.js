const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./Sources/index.tsx",
    output: {
        path: path.join(__dirname, "/Transpiled"),
        filename: "react_spa_bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            { test: /.tsx?$/, loader: "ts-loader" }
        ]
    }
};