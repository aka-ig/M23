const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    mode: "production", // "production" | "development" | "none"
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    devtool: "source-map",
    target: "node",
    externals: [nodeExternals()],
    plugins: [
        new WebpackShellPluginNext({
            onBuildEnd: {
                scripts: ['npm run run:dev'],
                blocking: false,
                parallel: true
            }
        })
    ]
}
