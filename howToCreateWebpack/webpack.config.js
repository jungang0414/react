//這裡是webpack的設定檔，webpack會依照這個檔案的設定來進行打包
const HtmlWebpackPlugin = require("html-webpack-plugin");

//這裡是設定webpack的設定
module.exports = {
    entry: "./src/index.jsx", //進入點
    output: {
        publicPath: "http://localhost:3000/", //這裡是設定webpack-dev-server的位置
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"], //這裡是設定import時可以省略副檔名
    },

    devServer: {
        port: 3000, //這裡是設定webpack-dev-server的port
        historyApiFallback: true, //這裡是設定webpack-dev-server的historyApiFallback
    },
    //這裡是設定webpack要使用的loader
    module: {
        rules: [
            {
                test: /\.m?js/, //這裡是設定webpack要處理的檔案格式
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i, 
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/, 
                exclude: /node_modules/, //這裡是設定webpack要排除的檔案
                use: {
                    loader: "babel-loader", //這裡是設定webpack要使用的loader
                },
            },
        ],
    },
    //這裡是設定webpack要使用的plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};