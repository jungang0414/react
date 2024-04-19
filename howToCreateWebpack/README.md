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

#### 在根目錄底下設定webpack.config.js檔案, 此處用來調整打包設定
```
```

#### 在根目錄底下設定.babelrc檔案, 用來調整載入babel-loader的設定
```
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": [
     ["@babel/transform-runtime"]
  ]
}
```

#### 設定 Tailwind
```
//在專案目錄底下 初始化
npx tailwindcss init

//生成的tailwindcss.config.js檔案, 調整設定

//在專案目錄下新增postcss.config.js檔案, 調整設定

```

#### 創建html, jsx, css
```
//根據webpack設定, 我們將資源都放在src資料夾底下

//設定index.html

//設定index.jsx

//設定index.css 使用 tailwindcss

//設定App.jsx
```

#### 調整package.json檔案中的 script
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack --mode production",
  "start": "webpack serve --open --mode development"
},
```

#### 在terminal下指令啟動專案
```
npm run start
```