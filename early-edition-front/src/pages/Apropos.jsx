import React from "react";
import { Link } from "react-router-dom";

function Apropos() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>A propos d'Early Edition</h1>
        <div className="describing">
          <p>
            Ce site propose un service de mise en forme simple d'articles de
            presse destinés à être imprimés.
          </p>
          <p> Vous écrivez le contenu et nous nous occupons de tout le reste</p>
        </div>
        <Link to="/signup">
          <input id="try-button" type="submit" value="Essayer" />
        </Link>
      </div>
    </div>
  );
}

export default Apropos;
