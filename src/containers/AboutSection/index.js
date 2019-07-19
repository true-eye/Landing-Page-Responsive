import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";

import CircleImgButton from "../../components/CircleImgButton";
import RoundButton from "../../components/RoundButton";
import FInput from "../../components/FInput";
import FLabel from "../../components/FLabel";
import FGallery from "../../components/FGallery";
import ScrollUpButton from "react-scroll-up-button";
import "./index.scss";
const { requestSignIn } = userActions;

class AboutSection extends Component {
  componentDidMount() {}

  render() {
    const { t } = this.props;
    const galleries = [
      {
        image_position: "left",
        image_url: "images/about_1.png",
        title: "01",
        heading: t("about.feature-1.span")
      },
      {
        image_position: "right",
        image_url: "images/about_2.png",
        title: "02",
        heading: t("about.feature-2.span")
      },
      {
        image_position: "left",
        image_url: "images/about_3.png",
        title: "03",
        heading: t("about.feature-3.span")
      },
      {
        image_position: "right",
        image_url: "images/about_4.png",
        title: "04",
        heading: t("about.feature-4.span"),
        subheading: t("about.feature-4.p")
      },
      {
        image_position: "left",
        image_url: "images/about_5.png",
        title: "05",
        heading: t("about.feature-5.span"),
        subheading: t("about.feature-5.p"),
        addon: (
          <>
            <a href="#" className="feature-addon">
              #expat
            </a>
            &nbsp;
            <a href="#" className="feature-addon">
              #digitalnomad
            </a>
          </>
        )
      }
    ];
    return (
      <section id="about" className="content-section about">
        <ScrollUpButton
        // StopPosition={0}
        // ShowAtPosition={150}
        // EasingType="easeOutCubic"
        // AnimationDuration={500}
        // ContainerClassName="ScrollUpButton__Container"
        // TransitionClassName="ScrollUpButton__Toggled"
        // style={{ width: "50px", right: "calc(50% - 25px)", opacity: "1" }}
        // ToggledStyle={{ right: 100 }}
        />
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
              <FGallery galleries={galleries} />

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
