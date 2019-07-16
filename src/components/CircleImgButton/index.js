import React, { Component } from "react";
import "./index.scss";
class CircleImgButton extends Component {
  static defaultProps = {
    width: "54px"
  };
  componentDidMount() {}

  render() {
    const { src, width, className, id } = this.props;
    return (
      <img
        className={"circle-img-button " + className}
        src={src}
        id={id}
        style={{ width: width }}
      />
    );
  }
}

export default CircleImgButton;
