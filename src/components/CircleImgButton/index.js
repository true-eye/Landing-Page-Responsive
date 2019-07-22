import React, { Component } from "react";
import "./index.scss";
class CircleImgButton extends Component {
  static defaultProps = {
    width: "54px",
    className: ""
  };
  componentDidMount() {}

  render() {
    const { src, width, className, id, shadow, onClick } = this.props;
    return (
      <img
        className={
          "circle-img-button " +
          className +
          (shadow === true ? " button-shadow" : "")
        }
        src={src}
        id={id}
        style={{ width: width }}
        onClick={onClick}
      />
    );
  }
}

export default CircleImgButton;
