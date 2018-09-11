const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const webpack = require('webpack')

let conf = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: [
            './js/app.js',
            './scss/style.scss'
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options: {sourceMap: true}
                    }

                ]
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    },
                    'img-loader'
                ]
            },
          {
              test: /\.(woff"woff2|eot|ttf|otf)$/,
              use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
              ]
          },
          {
              test: /\.svg$/,
              loader: 'svg-url-loader'
          }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin(
            [
              {from: './img', to: 'img'}
            ],
            {
                ignore: [
                  {glob: 'svg/*'}
                ]
            }
        )
    ]
}

module.exports = (env, options) => {
    const production = options.mode === 'production'
    conf.devtool = production ? false : 'eval-sourcemap'
    if (production) {
        conf.plugins.push(
            new ImageminPlugin({
              test: /\.(png|jpe?g|gif|svg)$/i
            })
        )
        conf.plugins.push(
          new UglifyJSPlugin({
            sourceMap: true
          })
        )
        conf.plugins.push(
          new ImageminPlugin({
            test: /\.(png|jpe?g|gif|svg)$/i
          })
        )
    }
    return conf
}