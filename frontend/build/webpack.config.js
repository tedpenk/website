const createConfig = require('./createConfig');
const openInEditor = require('launch-editor-middleware');

module.exports = createConfig({
    entry: {
        main: '../src/main.js',
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: '[name].js'
    },
    devtool: '#cheap-module-source-map',
    devServer: {
        quiet: true,
        before(app) {
            app.use('/__open-in-editor', openInEditor())
        }
    }
})
