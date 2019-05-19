var path = require('path');

var config = {
    "entry" : "./src/index.js",
    "output" : {
        "path" : path.resolve(__dirname,"dist"),
        "filename" : "bundle.js",
        "publicPath" : "/dist"
    },
    "module" : {
        "rules" : [
            {
                "test" : /\.(js)$/,
                "include" : path.resolve(__dirname,"src"),
                "loader" : "babel-loader",
                "query" : {
                    "presets" : ["react","es2015","stage-2"]
                }
            }
        ]
    }
}

module.exports = config