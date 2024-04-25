import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div className="box">
        <div className="header">
          <h1>React Hooks</h1>
        </div>
        <div className="content">
          <p>
            useState : <Link to={"/usestate"}>useState example</Link>{" "}
          </p>
          <p>
            useEffect : <Link to={"/useeffect"}>useEffect example</Link>
          </p>
          <p>
            useRef : <Link to={"/useref"}>useRef example</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
