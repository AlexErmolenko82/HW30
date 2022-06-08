import "./styles.css";

import { Routes, Route, NavLink } from "react-router-dom";

import Flights from "./pages/Flights";
import Packages from "./pages/Packages";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink
            className={`nav-item ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="/"
          >
            Home page
          </NavLink>

          <NavLink
            className={`nav-item ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="flights"
          >
            Flights
          </NavLink>
          <NavLink
            className={`nav-item ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="packages"
          >
            Packages
          </NavLink>
          <NavLink
            className={`nav-item ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="hotels"
          >
            Hotels
          </NavLink>
          <NavLink
            className={`nav-item ${({ isActive }) =>
              isActive ? "active" : ""}`}
            to="ololo"
          >
            Fake link
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flights" element={<Flights />} />
        <Route path="packages" element={<Packages />} />
        <Route path="hotels" element={<Hotels />}>
          <Route path=":hotelId" element={<Hotel />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
