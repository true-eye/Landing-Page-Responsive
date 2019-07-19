import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./index.scss";
class RoundButton extends Component {
  static defaultProps = {
    width: "",
    className: ""
  };
  componentDidMount() {}

  render() {
    const {
      width,
      className,
      id,
      label,
      onClick,
      disabled,
      loading
    } = this.props;
    return (
      <button
        className={"button round-button " + className}
        id={id}
        style={{ width: width }}
        onClick={onClick}
        disabled={disabled}
      >
        {label}

        {loading && (
          <CircularProgress
            size={24}
            style={{
              color: "#2065ff",
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -12,
              marginLeft: -12
            }}
          />
        )}
      </button>
    );
  }
}

export default RoundButton;
