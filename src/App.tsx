import "./App.css";
import Home from "./page/Home";
import CursorIcon from "./assets/yellow.png";

function App() {


  return (
    <div
      style={{
        cursor: `url(${CursorIcon}), auto`,
      }}
      className="min-h-screen"
    >
      <Home />
    </div>
  );
}

export default App;
