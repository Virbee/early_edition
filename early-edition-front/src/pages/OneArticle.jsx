import React, { Component } from "react";
import EditArticleExemple from "../components/EditArticleExemple";
import axios from "axios";

class OneArticle extends Component {
  constructor(props) {
    super();
    console.log("One article");
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    const url = this.props.location.pathname.split("/");
    axios
      .get(`/api/articles/${url[1]}`, {
        withCredentials: true
      })
      .then(article => this.setState({ article: article.data }))
      .catch(err => console.log(err));
  }

  render() {
    let editComponent = null;
    if (this.state.article) {
      editComponent = <EditArticleExemple article={this.state.article} />;
    }

    return <div className="one-content">{editComponent}</div>;
  }
}

export default OneArticle;
