import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditArticleExemple from "../components/EditArticleExemple";

function Home() {
  return (
    <section className="home-page">
      <Header />
      <div className="home-content">
        <div className="welcome">
          <ul>
            <li>Choisissez votre format</li>
            <li>Complétez l'article</li>
            <li>Imprimez-le !</li>
          </ul>
          <h3>Essayez, c'est facile ;)</h3>
        </div>
        <EditArticleExemple />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
