import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <h1>React Hooks</h1>
      <p>
        useState : <Link to={"/usestate"}>example</Link>{" "}
      </p>
    </>
  );
}

export default App;
