const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin   = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap', // mount is exported from bootstrap
            },
            shared: {
                faker: {
                    singleton: true, // we only want to load one copy of faker so versions don't conflict
                }
            },
        })
    ],
}