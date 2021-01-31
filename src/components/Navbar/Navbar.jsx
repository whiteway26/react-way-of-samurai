import React from "react";
import { NavLink } from "react-router-dom";
import n from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={n.nav}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={n.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={n.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
