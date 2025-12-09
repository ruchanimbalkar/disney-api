import { Routes, Route, Link } from "react-router-dom";
import buttonData from "./buttonData.js";
//import pages
import Mickey from "./pages/Mickey";
import Minnie from "./pages/Minnie";
import Donald from "./pages/Donald";
import Daisy from "./pages/Daisy";
//import styles
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Disney</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Mickey Mouse</Link>
            </li>
            <li>
              <Link to="/minnie">Minnie Mouse</Link>
            </li>
            <li>
              <Link to="/donald">Donald Duck</Link>
            </li>
            <li>
              <Link to="/daisy">Daisy Duck</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Mickey character={buttonData.Mickey} />} />
        <Route
          path="/minnie"
          element={<Minnie character={buttonData.Minnie} />}
        />
        <Route
          path="/donald"
          element={<Donald character={buttonData.Donald} />}
        />
        <Route path="/daisy" element={<Daisy character={buttonData.Daisy} />} />
      </Routes>
    </>
  );
}

export default App;
