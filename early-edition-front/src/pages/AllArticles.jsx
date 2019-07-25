import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import EditArticleExemple from "../components/EditArticleExemple";

class AllArticles extends Component {
  constructor(props) {
    super(props);
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
      .get("/api/articles", { withCredentials: true })
      .then(articles => {
        this.setState({ articles: articles.data });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getAllArticles();
  }

  addNew() {
    axios
      .post("/api/articles", { withCredentials: true })
      .then(res => this.props.history.push(`/${res.data._id}`));
  }

  deleteOne = e => {
    const id = e.target.id;
    axios
      .delete(`/api/articles/${id}`, {
        withCredentials: true
      })
      .then(
        this.setState({
          articles: this.state.articles.filter(article => article._id !== id)
        })
      );
  };

  render() {
    return (
      <div className="all-content">
        <div className="one-article new-article" onClick={e => this.addNew()}>
          +
        </div>
        {this.state.articles.map(article => (
          <div key={article._id} className="one-article">
            <EditArticleExemple article={article} editable={false} />
            <Link to={`/${article._id}`}>
              <h3>{article.name}</h3>
            </Link>
            <p id={article._id} onClick={e => this.deleteOne(e)}>
              Supprimer
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default AllArticles;
