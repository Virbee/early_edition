import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditArticleExemple from "../components/EditArticleExemple";

function OneArticle() {
  return (
    <section className="one-page">
      <Header />
      <div className="one-content">
        <EditArticleExemple />
      </div>
      <Footer />
    </section>
  );
}

export default OneArticle;
