import React from "react";
import ContentEditable from "react-contenteditable";

class EditText extends React.Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = { html: "" };
  }

  componentDidUpdate(prevProps) {
    if (this.props.text !== prevProps.text) {
      this.setState({
        html: this.props.text
      });
    }
  }

  handleChange = evt => {
    const contentDiv = document.getElementById("content");
    const contentContainer = document.getElementById("content-container");
    if (
      contentDiv.clientHeight <= contentContainer.clientHeight ||
      contentContainer.scrollWidth <= contentDiv.clientWidth
    ) {
      this.props.onChange(evt.target.value);
    }
  };

  pasteAsPlainText = event => {
    event.preventDefault();
    // const text = event.clipboardData.getData("text/plain").slice(0, 195);
    document.execCommand(
      "insertHTML",
      false,
      event.clipboardData.getData("text/plain")
    ); //(aCommandName, aShowDefaultUI, aValueArgument)
  };

  createParagraph = event => {
    const keyCode = event.keyCode || event.which;
    if (keyCode === 13) {
      var cleanString = this.state.html.replace(/<div>/g, "<p>");
      this.setState({ html: cleanString });
    }
  };

  render = () => {
    var cleanString = this.props.text.replace(/&nbsp;/g, " ");
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={cleanString} // innerHTML of the editable div
        disabled={!this.props.editable}
        onChange={this.handleChange} // handle innerHTML change
        onPaste={this.pasteAsPlainText}
        onKeyPress={this.createParagraph}
        onBlur={this.props.onBlur}
        tagName="p" // Use a custom HTML tag (uses a div by default)
        id="content"
      />
    );
  };
}

export default EditText;
