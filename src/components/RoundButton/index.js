import React, { Component } from "react";
import "./index.scss";
class RoundButton extends Component {
  static defaultProps = {
    width: "",
    className: ""
  };
  componentDidMount() {}

  render() {
    const { width, className, id, label } = this.props;
    return (
      <button
        className={"button round-button " + className}
        id={id}
        style={{ width: width }}
      >
        {label}
      </button>
    );
  }
}

export default RoundButton;
