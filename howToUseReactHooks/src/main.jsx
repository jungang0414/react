import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//導入路由器套件
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//建立路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <div>test</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
