import React, { Component } from "react";
import "./index.scss";
class FModal extends Component {
  static defaultProps = {
    width: "54px",
    className: ""
  };

  render() {
    const { width, className, id, label, onClose } = this.props;
    return (
      <div id={id} className={"fmodal " + className}>
        <div className="fmodal__content">
          <div className="fmodal__header">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <h4>&nbsp; </h4>
          </div>
          <div className="fmodal__body">{this.props.children}</div>
          <div className="fmodal__footer" />
        </div>
      </div>
    );
  }
}

export default FModal;
