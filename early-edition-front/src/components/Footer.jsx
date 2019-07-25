import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const activeStyle = { fontWeight: "bold", color: "#dfff00" };
  return (
    <footer className="App-footer">
      <ul>
        <li>
          <NavLink
            to="/contacter"
            activeClassName="selected"
            activeStyle={activeStyle}
          >
            Contacter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apropos"
            activeClassName="selected"
            activeStyle={activeStyle}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
