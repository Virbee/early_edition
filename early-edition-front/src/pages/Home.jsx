import React from "react";
import EditArticleExemple from "../components/EditArticleExemple";

function Home() {
  return (
    <div className="home-content">
      <div className="welcome">
        <ul>
          <li>Choisissez votre format</li>
          <li>Complétez l'article</li>
          <li>Imprimez-le !</li>
        </ul>
        <h3>Essayez, c'est facile ;)</h3>
      </div>
      {/* <EditArticleExemple /> */}
    </div>
  );
}

export default Home;
