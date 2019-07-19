import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";

import CircleImgButton from "../../components/CircleImgButton";
import RoundButton from "../../components/RoundButton";
import FInput from "../../components/FInput";
import FLabel from "../../components/FLabel";
import "./index.scss";
const { requestSignIn } = userActions;

class AboutSection extends Component {
  componentDidMount() {}

  render() {
    const { t } = this.props;
    return (
      <section id="about" className="content-section about">
        <div className="container-fluid fullheight">
          <div
            className="scroll about-info"
            style={{
              width: "100%",
              backgroundImage: "linear-gradient(#2065FF, #07e2ef)"
            }}
          >
            {/* <div
              id="mCSB_1_container"
              className="mCSB_container"
              style={{
                position: "relative",
                top: "0px",
                left: "0px",
                backgroundImage: "linear-gradient(#2065FF, #07e2ef)"
              }}
              dir="ltr"
            > */}
            <div className="col-xs-12 col-lg-6">
              <div className="about-mobscreen-backpattern">
                <img src="images/about_static_pattern.png" />
              </div>
              <div className="about-mobscreen">
                <img src="images/about_static_bg.png" />
              </div>
            </div>
            <div className="col-xs-12 col-lg-6 blocks-container">
              <div className="section-controls">
                <CircleImgButton
                  src="images/btn_back.png"
                  id="about-close"
                  className="section-close"
                  width="80px"
                />
              </div>

              <div className="content-block section-title">
                <h2>{t("about.section-title.h2")}</h2>
                <span>{t("about.section-title.span")}</span>
                <p>{t("about.section-title.p")}</p>
              </div>
              <div className="content-block features">
                <div className="col-xs-12 feature-item feature-item-left">
                  <div
                    className="col-xs-12 col-sm-6 feature-image "
                    style={{
                      backgroundImage: "url('images/about_1.png')"
                    }}
                  />
                  <div className="col-xs-12 col-sm-6 feature-description">
                    <h3>01</h3>
                    <span>{t("about.feature-1.span")}</span>
                  </div>
                </div>

                <div className="col-xs-12 feature-item feature-item-right">
                  <div
                    className="col-xs-12 col-sm-6 feature-image"
                    style={{
                      backgroundImage: "url('images/about_2.png')"
                    }}
                  />
                  <div className="col-xs-12 col-sm-6 feature-description">
                    <h3>02</h3>
                    <span>{t("about.feature-2.span")}</span>
                  </div>
                </div>

                <div className="col-xs-12 feature-item feature-item-left">
                  <div
                    className="col-xs-12 col-sm-6 feature-image"
                    style={{
                      backgroundImage: "url('images/about_3.png')"
                    }}
                  />
                  <div className="col-xs-12 col-sm-6 feature-description">
                    <h3>03</h3>
                    <span>{t("about.feature-3.span")}</span>
                  </div>
                </div>

                <div className="col-xs-12 feature-item feature-item-right">
                  <div
                    className="col-xs-12 col-sm-6 feature-image"
                    style={{
                      backgroundImage: "url('images/about_4.png')"
                    }}
                  />
                  <div className="col-xs-12 col-sm-6 feature-description">
                    <h3>04</h3>
                    <span>{t("about.feature-4.span")}</span>
                    <p className="text-s">{t("about.feature-4.p")}</p>
                  </div>
                </div>
                <div className="col-xs-12 feature-item feature-item-left">
                  <div
                    className="col-xs-12 col-sm-6 feature-image"
                    style={{
                      backgroundImage: "url('images/about_5.png')"
                    }}
                  />
                  <div className="col-xs-12 col-sm-6 feature-description">
                    <h3>05</h3>
                    <span>{t("about.feature-5.span")}</span>
                    <p className="text-s">{t("about.feature-5.p")}</p>
                  </div>
                </div>
              </div>

              <div
                className="content-block about-bottom-container"
                style={{
                  backgroundImage: "url('images/about_bottom.png')"
                }}
              >
                <div className="col-xs-12 about-bottom-container__title">
                  {t("about.bottom-1")}
                  <br />
                  <br />
                  {t("about.bottom-2")}
                </div>
                <div className="col-md-10" style={{ marginTop: "30px" }}>
                  <div className="sign-up-form">
                    <div className="sign-up-form__inline-grow">
                      <FLabel label={t("about.form.email")} />
                      <FInput />
                    </div>
                    <RoundButton label={t("about.form.get-early-access")} />
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authentication
});

const mapDispatchToProps = dispatch => {
  return {
    requestSignIn
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(AboutSection);
