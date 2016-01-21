module.exports = {
    entry: "./web/webpack/entry.js",
    output: {
        path: './web/webpack/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};