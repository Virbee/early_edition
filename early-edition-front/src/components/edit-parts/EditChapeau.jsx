import React from "react";
import ContentEditable from "react-contenteditable";

class EditChapeau extends React.Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = { html: "" };
  }

  componentDidUpdate(prevProps) {
    if (this.props.chapeau !== prevProps.chapeau) {
      this.setState({
        html: this.props.chapeau
      });
    }
  }

  handleChange = evt => {
    this.props.onChange(evt.target.value);
  };

  disableEnter = event => {
    const keyCode = event.keyCode || event.which;

    if (keyCode === 13) {
      event.returnValue = false;
      if (event.preventDefault) event.preventDefault();
    }
  };

  pasteAsPlainText = event => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text); //(aCommandName, aShowDefaultUI, aValueArgument)
  };

  render = () => {
    var cleanString = this.props.chapeau.replace(/&nbsp;/g, " ");
    return (
      <ContentEditable
        disabled={!this.props.editable}
        innerRef={this.contentEditable}
        html={cleanString} // innerHTML of the editable div
        onChange={this.handleChange} // handle innerHTML change
        onPaste={this.pasteAsPlainText}
        onKeyPress={this.disableEnter}
        onBlur={this.props.onBlur}
        tagName="h3" // Use a custom HTML tag (uses a div by default)
        id="chapeau"
        className={this.props.className}
      />
    );
  };
}

export default EditChapeau;
