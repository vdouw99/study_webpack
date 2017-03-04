/**
 * Created by sf on 2017/3/3.
 */

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loder: 'babel',
                query: {
                    presets: ['lastest']
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ]
};