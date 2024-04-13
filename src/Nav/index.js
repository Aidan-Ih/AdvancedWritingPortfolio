import { Link, useLocation } from "react-router-dom";
import "./index.css"
function Nav() {
  return (
    <nav className="nav nav-tabs mt-2">
      <Link to="/"
        className="nav-item">Aidan's Portfolio Page</Link>
      <Link to="/AI"
        className="nav-item">Ai Writing</Link>
      <Link to="/LitReview"
        className="nav-item">Lit Review</Link>
      <Link to="/Interview"
        className="nav-item">Inteview</Link>
      <Link to="/HowTo"
        className="nav-item">How To</Link>
    </nav>
  );
}
export default Nav;