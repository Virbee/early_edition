import React from "react";
import ContentEditable from "react-contenteditable";

class EditTitle extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = { html: "" };
  }

  componentDidUpdate(prevProps) {
    if (this.props.title !== prevProps.title) {
      this.setState({
        html: this.props.title
      });
    }
  }

  handleChange = evt => {
    const titleDiv = document.getElementById("title");
    const titleContainer = document.getElementById("title-container");
    // si il y a overflow, ne pas mettre à jour l'état
    if (titleDiv.clientHeight <= titleContainer.clientHeight) {
      this.props.onChange(evt.target.value);
    }
  };

  pasteAsPlainText = event => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain").slice(0, 23);
    document.execCommand("insertHTML", false, text); //(aCommandName, aShowDefaultUI, aValueArgument)
  };

  render = () => {
    var cleanString = this.props.title.replace(/&nbsp;/g, " ").toUpperCase();
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={cleanString} // innerHTML of the editable div
        disabled={!this.props.editable}
        onChange={this.handleChange} // handle innerHTML change
        onPaste={this.pasteAsPlainText}
        onBlur={this.props.onBlur}
        tagName="h1" // Use a custom HTML tag (uses a div by default)
        id="title"
      />
    );
  };
}

export default EditTitle;
