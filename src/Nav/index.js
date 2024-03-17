import { Link, useLocation } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/"
        className="nav-link"> Home</Link>
      <Link to="/Interview"
        className="nav-link">Inteview</Link>
        <Link to="/Interview"
        className="nav-link">Other links here as needed...</Link>
    </nav>
  );
}
export default Nav;