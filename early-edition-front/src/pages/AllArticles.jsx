import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

class AllArticles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      new: {
        title: "ENTREZ LE TITRE",
        chapeau:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
      }
    };
  }

  getAllArticles() {
    axios
      .get("http://localhost:3000/api/articles")
      .then(articles => this.setState({ articles: articles.data }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllArticles();
  }

  addNew() {
    axios
      .post("http://localhost:3000/api/articles", { name: "Sans nom" })
      .then(res => this.props.history.push(`/${res.data._id}`))
      .catch();
  }

  render() {
    return (
      <div className="all-content">
        <div className="one-article new-article">
          <ArticleCard article={this.state.new} />
          <Link to="/one-article">
            <h3 onClick={e => this.addNew()}>New</h3>
          </Link>
        </div>
        {this.state.articles.map(article => (
          <div className="one-article">
            <ArticleCard article={article} />
            <Link key={article._id} to={`/${article._id}`}>
              <h3>{article.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default AllArticles;
