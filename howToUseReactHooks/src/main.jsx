import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//導入路由器套件
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseStateExample from "./components/useState-example/useState-example.jsx";
import UseEffectExample from "./components/useEffect-example/useEffect-example.jsx";

//建立路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/usestate",
    element: <UseStateExample />,
  },
  {
    path: "/useeffect",
    element: <UseEffectExample />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
