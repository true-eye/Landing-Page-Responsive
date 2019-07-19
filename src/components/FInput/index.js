import React, { Component } from "react";
import "./index.scss";
class FInput extends Component {
  static defaultProps = {
    width: "54px",
    className: ""
  };

  render() {
    const { width, className, id, value } = this.props;
    return <input type="text" className={"finput " + className} id={id} />;
  }
}

export default FInput;
