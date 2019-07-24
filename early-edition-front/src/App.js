import React from "react";
import "./App.js";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacter" component={Contact} />
        <Route path="/apropos" component={Apropos} />
      </Switch>
    </div>
  );
}

export default App;
