import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
      <h1>
        <Link to="/">Early edition</Link>
      </h1>
      <p className="login">Se connecter</p>
    </header>
  );
}

export default Header;
