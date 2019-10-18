const createConfig = require('./createConfig');
const openInEditor = require('launch-editor-middleware');

module.exports = function (env = 'dev') {
    return createConfig({
        entry: {
            main: __dirname + '/main.js',
        },
        output: {
            path: __dirname + '/../../build',
            filename: '[name].js'
        },
        devtool: '#cheap-module-source-map',
        devServer: {
            quiet: true,
            before(app) {
                app.use('/__open-in-editor', openInEditor())
            }
        }
    }, env)
}

