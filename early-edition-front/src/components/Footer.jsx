import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="App-footer">
      <ul>
        <li>
          <Link to="/contacter">Contacter</Link>
        </li>
        <li>
          <Link to="/apropos">A propos</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
