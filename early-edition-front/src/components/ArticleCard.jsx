import React from "react";

function ArticleCard(props) {
  return (
    <div className="whole-articleCard">
      <div className="titleCard" id="title-containerCard">
        <h1 id="titleCard">{props.article.title}</h1>
      </div>
      <div className="chapeauCard" id="chapeau-containerCard">
        <h3 id="chapeauCard">{props.article.chapeau}</h3>
      </div>
      <div className="article-contentCard" id="content-containerCard">
        <p id="contentCard">{props.article.text}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
