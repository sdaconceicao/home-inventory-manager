module.exports = {
    entry: '',
    output: {
        path: '',
        filename: ''
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.js$/, loader: 'babel?optional[]=runtime', exclude: /node_modules|vendor|templates.js|_spec.js/}
        ]
    }
};
