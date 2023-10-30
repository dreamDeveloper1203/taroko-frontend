/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Contact List
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/add">Add Contact</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
