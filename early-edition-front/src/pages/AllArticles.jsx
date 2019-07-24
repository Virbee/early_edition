import React from "react";
import { Link } from "react-router-dom";

// get all articles
//post new article

function AllArticles() {
  return (
    <div className="all-content">
      <div className="one-article">
        <Link to="/one-article">
          <div className="view">View of the article</div>
          <h3>New</h3>
        </Link>
      </div>
      <div className="one-article">
        <Link to="/one-article">
          <div className="view">
            <h1>Title</h1>
            <h3>Chapeau</h3>
            <p>Text</p>
          </div>
          <h3>Nom de l'article</h3>
        </Link>
      </div>
      {/* pour chacun des articles présents dans la base, l'afficher avec son titre */}
      {/* quand l'affichage est fini, en créer un nouveau vide et l'afficher à la suite avec un plus */}
    </div>
  );
}

export default AllArticles;
