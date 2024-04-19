import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

//建立根元素
const rootElement = document.querySelector("#app");
if (!rootElement) throw new Error("No root element found");
const root = createRoot(rootElement);
//使用嚴格模式渲染App组件
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
