import React, { Component } from "react";
import "./index.scss";
class FLabel extends Component {
  static defaultProps = {
    width: "54px",
    className: ""
  };

  render() {
    const { width, className, id, label } = this.props;
    return (
      <label className={"flabel " + className} id={id}>
        {label}
      </label>
    );
  }
}

export default FLabel;
