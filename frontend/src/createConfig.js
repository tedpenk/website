const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { VueLoaderPlugin } = require('vue-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = (config, dev) => {

    const baseConfig = {
        mode: dev ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "vue-style-loader",
                        use: [
                            {
                                loader: 'css-loader',
                                options: { sourceMap: true }
                            },
                            'postcss-loader'
                        ]
                    })
                },
                {
                    test: /\.styl(us)?$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "vue-style-loader",
                        use: [
                            'css-loader',
                            'postcss-loader',
                            'stylus-loader',
                            {
                                loader: 'style-resources-loader',
                                options: {
                                    patterns: [
                                        path.resolve(__dirname, '../src/devtools/style/imports.styl')
                                    ]
                                }
                            }
                        ]
                    })
                }
            ]
        },
        performance: {
            hints: false
        },
        plugins: [
            new ExtractTextPlugin("styles.css"),
            new VueLoaderPlugin(),
            ...(process.env.VUE_DEVTOOL_TEST ? [] : [new FriendlyErrorsPlugin()]),
            new webpack.DefinePlugin({
                'process.env.RELEASE_CHANNEL': JSON.stringify(process.env.RELEASE_CHANNEL || 'stable')
            })
        ],
        devServer: {
            port: process.env.PORT,
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        },
        stats: {
            colors: true
        }
    }

    if (process.env.NODE_ENV === 'production') {
        const UglifyPlugin = require('uglifyjs-webpack-plugin')
        baseConfig.plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            })
        )
        baseConfig.optimization = {
            minimizer: [
                new UglifyPlugin({
                    uglifyOptions: {
                        compress: {
                            // turn off flags with small gains to speed up minification
                            arrows: false,
                            collapse_vars: false, // 0.3kb
                            comparisons: false,
                            computed_props: false,
                            hoist_funs: false,
                            hoist_props: false,
                            hoist_vars: false,
                            inline: false,
                            loops: false,
                            negate_iife: false,
                            properties: false,
                            reduce_funcs: false,
                            reduce_vars: false,
                            switches: false,
                            toplevel: false,
                            typeofs: false,

                            // a few flags with noticable gains/speed ratio
                            // numbers based on out of the box vendor bundle
                            booleans: true, // 0.7kb
                            if_return: true, // 0.4kb
                            sequences: true, // 0.7kb
                            unused: true, // 2.3kb

                            // required features to drop conditional branches
                            conditionals: true,
                            dead_code: true,
                            evaluate: true
                        },
                        mangle: {
                            safari10: true
                        }
                    },
                    sourceMap: false,
                    cache: true,
                    parallel: true
                })
            ]
        }
    }

    return merge(baseConfig, config)
}
