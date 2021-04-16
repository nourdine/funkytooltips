const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/js/jquery.funkytooltips.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    externals: {
        jquery: 'jQuery',
    }
};
