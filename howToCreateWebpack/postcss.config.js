const tailwindcss = require('tailwindcss');

//這裡是設定postcss要使用的plugin
module.exports = {
    plugins: [
        "postcss-preset-env",
        "tailwindcss",
    ],
};