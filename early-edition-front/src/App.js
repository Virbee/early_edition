import React from "react";
import "./App.js";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import AllArticles from "./pages/AllArticles.jsx";
import OneArticle from "./pages/OneArticle.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/all" component={AllArticles} />
          <Route path="/:id" component={OneArticle} />
          <Route exact path="/contacter" component={Contact} />
          <Route path="/apropos" component={Apropos} />
        </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default App;
