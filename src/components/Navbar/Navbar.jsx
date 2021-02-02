import React from "react";
import { Link, NavLink } from "react-router-dom";
import n from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <NavLink to="/news" activeClassName={n.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={n.active}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={n.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
