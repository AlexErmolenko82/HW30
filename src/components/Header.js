import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <NavLink
          className={`nav-item ${({ isActive }) => (isActive ? "active" : "")}`}
          to="/"
        >
          Home page
        </NavLink>
        <NavLink
          className={`nav-item ${({ isActive }) => (isActive ? "active" : "")}`}
          to="flights"
        >
          Flights
        </NavLink>
        <NavLink
          className={`nav-item ${({ isActive }) => (isActive ? "active" : "")}`}
          to="packages"
        >
          Packages
        </NavLink>
        <NavLink
          className={`nav-item ${({ isActive }) => (isActive ? "active" : "")}`}
          to="hotels"
        >
          Hotels
        </NavLink>
        <NavLink
          className={`nav-item ${({ isActive }) => (isActive ? "active" : "")}`}
          to="ololo"
        >
          Fake link
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
