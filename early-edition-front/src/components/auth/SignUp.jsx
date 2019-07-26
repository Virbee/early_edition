import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    this.service
      .signup(email, password)
      .then(response => {
        this.setState({
          email: "",
          password: "",
          message: ""
        });
        this.props.getUser(response);
        this.props.history.push("/");
      })
      .catch(res => {
        this.setState({
          message: res.message
        });
      });
  };

  handleChange = event => {
    console.log(this.state);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    let errorMessage = null;
    if (this.state.message) {
      errorMessage = <p>{this.state.message}</p>;
    }
    return (
      <div className="form">
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />

          <label>Mot de passe :</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Inscription" />
        </form>

        <p>
          Vous avez déjà un compte ? <Link to={"/login"}>Connexion</Link>
        </p>
        <div className="error">{errorMessage}</div>
      </div>
    );
  }
}

export default Signup;
