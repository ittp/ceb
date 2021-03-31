const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        background: path.resolve(__dirname, './packages/background/index.ts'),
        content: path.resolve(__dirname, './packages/content/index.ts'),
        devpanel: path.resolve(__dirname, './packages/devpanel/index.ts'),
        devtool: path.resolve(__dirname, './packages/devtool/index.ts'),
        inject: path.resolve(__dirname, './packages/inject/index.ts'),
        option: path.resolve(__dirname, './packages/option/index.ts'),
        popup: path.resolve(__dirname, './packages/popup/index.ts'),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build', 'js')
    },
    plugins: [
        new CheckerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    optimization: {
        runtimeChunk: false, // don't break chrome 'unsafe-eval' policy
    }
};
