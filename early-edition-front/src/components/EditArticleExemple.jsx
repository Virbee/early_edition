import React from "react";
import EditTitle from "../components/edit-parts/EditTitle";
import EditChapeau from "../components/edit-parts/EditChapeau";
import EditText from "../components/edit-parts/EditText";

function EditArticleExemple() {
  return (
    <section className="editing-article">
      <div className="whole-article">
        <div className="title" id="title-container">
          <EditTitle />
        </div>
        <div className="chapeau" id="chapeau-container">
          <EditChapeau />
        </div>
        <div className="article-content" id="content-container">
          <EditText />
        </div>
      </div>
    </section>
  );
}

export default EditArticleExemple;
