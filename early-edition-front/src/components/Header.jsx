import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <header className="App-header">
          <h1>
            <Link to="/">Early edition</Link>
          </h1>
          <h4>Bienvenue {this.state.loggedInUser.email}</h4>
          <Link className="button" to="/">
            <p onClick={() => this.logoutUser()}>Se déconnecter</p>
          </Link>
        </header>
      );
    } else {
      return (
        <header className="App-header">
          <h1>
            <Link to="/">Early edition</Link>
          </h1>
          <Link className="button" to="/login">
            <p>Se connecter</p>
          </Link>
        </header>
      );
    }
  }
}

export default Header;
