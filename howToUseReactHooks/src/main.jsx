import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//導入路由器套件
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseStateExample from "./components/useState-example/useState-example.jsx";
import UseEffectExample from "./components/useEffect-example/useEffect-example.jsx";
import UseRefExample from "./components/useRef-example/useRef-example.jsx";
import InterviewCode from "./components/interview-code/interview-code.jsx";
import UseMemoExample from "./components/useMemo-example/useMemo-example.jsx";

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
  {
    path: "/useref",
    element: <UseRefExample />,
  },
  {
    path: "/usememo",
    element: <UseMemoExample />
  },
  {
    path: "/interview",
    element: <InterviewCode />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
