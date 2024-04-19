# Webpack 

使用Webpack來做React設定

#### 在專案目錄底下
```
//初始化
npm init -y
```

#### 安裝 webpack 工具
```
npm i webpack webpack-cli webpack-dev-server --save-dev
```

#### 安裝 babel 工具 (*.js檔案)
```
npm i babel-loader @babel/core @babel/preset-env @babel/runtime @babel/plugin-transform-runtime @babel/preset-react --save-dev
```

#### 安裝 HTML&CSS loader(.html/.css檔案)
```
npm i html-webpack-plugin css-loader style-loader postcss-loader postcss postcss-preset-env --save-dev
```

#### 安裝 React & tailwind
```
npm i react react-dom tailwindcss --save
```

#### 在根目錄底下設定webpack.config.js檔案, 此處用來調整打包設定.
```
```