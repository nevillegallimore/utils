// import system dependencies
const path = require('path');

////////////////////////////////////////////////////////////////////////////////////////////////////

const configuration = {
    devtool: 'source-map',
    entry: './dist/index.esm.js',
    mode: 'development',
    module: {
        rules: [
            { test: /\.(js|ts)$/, exclude: /node_modules/, use: ['babel-loader'] },
        ],
    },
    output: {
        filename: 'index.js',
        globalObject: 'this',
        library: '@nevillegallimore/utils',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist'),
    },
};

////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = configuration;
