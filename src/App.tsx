import "./App.css";
import Home from "./pages/Home";
import CursorIcon from "./assets/yellow.png";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div
      style={{
        cursor: `url(${CursorIcon}), auto`,
      }}
      className="min-h-screen"
    >
      <AboutMe/>
      <Home />
    </div>
  );
}

export default App;
