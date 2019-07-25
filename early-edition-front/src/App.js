import React, { Component } from "react";
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
import Signup from "./components/auth/SignUp";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <Header
            userInSession={this.state.loggedInUser}
            getUser={this.getTheUser}
          />
          <section className="main-container">
            <Switch>
              <Route exact path="/contacter" component={Contact} />
              <Route path="/apropos" component={Apropos} />
              <Route path="/:id" component={OneArticle} />
              <Route path="/" component={AllArticles} />
            </Switch>
          </section>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header userInSession={this.state.loggedInUser} />
          <section className="main-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contacter" component={Contact} />
              <Route path="/apropos" component={Apropos} />
              <Route
                exact
                path="/signup"
                render={props => (
                  <Signup {...props} getUser={this.getTheUser} />
                )}
              />
              <Route
                exact
                path="/login"
                render={props => <Login {...props} getUser={this.getTheUser} />}
              />
            </Switch>
          </section>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
