import React, { Component } from "react";
import "./index.scss";
class FInput extends Component {
  static defaultProps = {
    galleries: []
  };

  render() {
    const { galleries } = this.props;

    return (
      <div className="content-block features">
        {galleries.map((feature, index) => {
          let subheading = "";

          if (feature.subheading) {
            subheading = (
              <p className="text-s">
                {feature.subheading} &nbsp;
                {feature.addon && feature.addon}
              </p>
            );
          }
          return (
            <div
              key={index}
              className={`col-xs-12 feature-item feature-item-${
                feature.image_position
              }`}
            >
              <div
                className="col-xs-12 col-sm-6 feature-image "
                style={{
                  backgroundImage: `url(${feature.image_url})`
                }}
              />
              <div className="col-xs-12 col-sm-6 feature-description">
                {feature.title && <h3>{feature.title}</h3>}
                {feature.heading && <span>{feature.heading}</span>}
                {subheading}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FInput;
