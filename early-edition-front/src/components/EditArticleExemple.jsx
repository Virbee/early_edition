import React, { Component } from "react";
import EditTitle from "../components/edit-parts/EditTitle";
import EditChapeau from "../components/edit-parts/EditChapeau";
import EditText from "../components/edit-parts/EditText";
import axios from "axios";
import EditName from "./edit-parts/EditName";

class EditArticleExemple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      title: "",
      chapeau: "",
      text: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.article !== prevProps.article) {
      this.setState({
        name: this.props.article.name,
        title: this.props.article.title,
        chapeau: this.props.article.chapeau,
        text: this.props.article.text
      });
    }
  }

  handleChangeName = value => {
    this.setState({
      name: value
    });
  };

  handleChangeText = value => {
    this.setState({
      text: value
    });
  };

  handleChangeChapeau = value => {
    this.setState({
      chapeau: value
    });
  };

  handleChangeTitle = value => {
    this.setState({
      title: value
    });
  };

  saveChange = () => {
    axios
      .patch(`/api/articles/${this.props.article._id}`, this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    let editName = null;
    let editTitle = null;
    let editChapeau = null;
    let editText = null;
    if (this.state.title) {
      editName = (
        <EditName
          name={this.state.name}
          onBlur={this.saveChange}
          onChange={this.handleChangeName}
        />
      );
      editTitle = (
        <EditTitle
          title={this.state.title}
          onBlur={this.saveChange}
          onChange={this.handleChangeTitle}
        />
      );
      editChapeau = (
        <EditChapeau
          chapeau={this.state.chapeau}
          onBlur={this.saveChange}
          onChange={this.handleChangeChapeau}
        />
      );
      editText = (
        <EditText
          text={this.state.text}
          onBlur={this.saveChange}
          onChange={this.handleChangeText}
        />
      );
    }

    return (
      <section className="editing-article">
        <div className="name-article" id="name-container">
          {editName}
        </div>
        <div className="whole-article">
          <div className="title" id="title-container">
            {editTitle}
          </div>
          <div className="chapeau" id="chapeau-container">
            {editChapeau}
          </div>
          <div className="article-content" id="content-container">
            {editText}
          </div>
        </div>
      </section>
    );
  }
}

export default EditArticleExemple;
