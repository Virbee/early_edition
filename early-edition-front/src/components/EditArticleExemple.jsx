import React, { Component } from "react";
import EditTitle from "../components/edit-parts/EditTitle";
import EditChapeau from "../components/edit-parts/EditChapeau";
import EditText from "../components/edit-parts/EditText";
import axios from "axios";
import EditName from "./edit-parts/EditName";

class EditArticleExemple extends Component {
  constructor(props) {
    super(props);
    if (this.props.article) {
      this.state = { ...this.props.article };
    } else {
      this.state = {
        name: "",
        title: "",
        chapeau: "",
        text: ""
      };
    }
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
    const nameDiv = document.getElementById("name");
    const nameContainer = document.getElementById("name-container");
    if (nameDiv.clientHeight > nameContainer.clientHeight) {
      this.setState({
        name: this.state.name
      });
    } else {
      this.setState({ name: value });
    }
  };

  handleChangeText = value => {
    const contentDiv = document.getElementById("content");
    const contentContainer = document.getElementById("content-container");
    if (
      contentDiv.clientHeight > contentContainer.clientHeight ||
      contentDiv.scrollWidth > contentContainer.clientWidth
    ) {
      this.setState({
        text: this.state.text
      });
    } else {
      this.setState({
        text: value
      });
    }
  };

  handleChangeChapeau = value => {
    this.setState({
      chapeau: value
    });
  };

  handleChangeTitle = value => {
    const titleDiv = document.getElementById("title");
    const titleContainer = document.getElementById("title-container");
    // si il y a overflow, ne pas mettre à jour l'état
    if (titleDiv.clientHeight > titleContainer.clientHeight) {
      this.setState({
        title: this.state.title
      });
    } else {
      this.setState({
        title: value
      });
    }
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
          editable={this.props.editable}
          onChange={this.handleChangeName}
          className={this.props.className}
        />
      );
      editTitle = (
        <EditTitle
          title={this.state.title}
          onBlur={this.saveChange}
          editable={this.props.editable}
          onChange={this.handleChangeTitle}
          className={this.props.className}
        />
      );
      editChapeau = (
        <EditChapeau
          chapeau={this.state.chapeau}
          onBlur={this.saveChange}
          editable={this.props.editable}
          onChange={this.handleChangeChapeau}
          className={this.props.className}
        />
      );
      editText = (
        <EditText
          text={this.state.text}
          onBlur={this.saveChange}
          editable={this.props.editable}
          onChange={this.handleChangeText}
          className={this.props.className}
        />
      );
    }

    return (
      <section className="editing-article">
        <div id="name-container">{editName}</div>
        <div className="whole-article">
          <div id="title-container">{editTitle}</div>
          <div id="chapeau-container">{editChapeau}</div>
          <div id="content-container">{editText}</div>
        </div>
      </section>
    );
  }
}

export default EditArticleExemple;
