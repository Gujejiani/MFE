const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin   = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index',
            },
            shared: {
                faker: {
                    singleton: true, // we only want to load one copy of faker so versions don't conflict
                }
            },
        })
    ],
} 