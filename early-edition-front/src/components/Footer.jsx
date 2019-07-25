import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="App-footer">
      <ul>
        <li>
          <NavLink
            to="/contacter"
            activeClassName="selected"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            Contacter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apropos"
            activeClassName="selected"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
