const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../../frontend/src/webpack.config');

const config = require('../config');

export default function () {
    const compiler = webpack(webpackConfig(config.dev));
    return middleware(compiler, {

    });
}
