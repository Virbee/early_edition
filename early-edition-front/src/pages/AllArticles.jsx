import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// get all articles
//post new article
class AllArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  getAllArticles() {
    axios
      .get("http://localhost:3000/api/articles")
      .then(articles => this.setState({ articles }))
      .catch(err => console.log(err));
  }

  addNew() {
    this.api
      .post("/")
      .then()
      .catch();
  }

  render() {
    return (
      <div className="all-content">
        <div className="one-article new-article">
          <Link to="/one-article">
            <div className="view">View of the article</div>
            <h3>New</h3>
          </Link>
        </div>
        {this.state.articles.map(article => (
          <div className="one-article">
            <Link key={article._id} to={`/${article._id}`}>
              <div className="view">
                <h1>{article.title}</h1>
                <h3>{article.chapeau}</h3>
                <p>{article.text}</p>
              </div>
              <h3>{article.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default AllArticles;
