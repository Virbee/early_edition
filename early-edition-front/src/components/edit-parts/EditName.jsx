import React from "react";
import ContentEditable from "react-contenteditable";

class EditName extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = {
      html: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.setState({
        html: this.props.name
      });
    }
  }

  handleChange = evt => {
    this.props.onChange(evt.target.value);
  };

  pasteAsPlainText = event => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain").slice(0, 10);
    document.execCommand("insertHTML", false, text); //(aCommandName, aShowDefaultUI, aValueArgument)
  };

  render = () => {
    var cleanString = this.props.name.replace(/&nbsp;/g, " ").toLowerCase();
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={cleanString} // innerHTML of the editable div
        disabled={!this.props.editable}
        onChange={this.handleChange} // handle innerHTML change
        onPaste={this.pasteAsPlainText}
        onBlur={this.props.onBlur}
        tagName="p" // Use a custom HTML tag (uses a div by default)
        id="name"
        className={this.props.className}
      />
    );
  };
}

export default EditName;
