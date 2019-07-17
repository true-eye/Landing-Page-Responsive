import React, { Component } from "react";
import "./index.scss";
class RoundButton extends Component {
  static defaultProps = {
    width: "54px"
  };
  componentDidMount() {}

  render() {
    const { width, className, id, label } = this.props;
    return (
      <button class={"button round-button " + className} id={id}>
        {label}
      </button>
    );
  }
}

export default RoundButton;
