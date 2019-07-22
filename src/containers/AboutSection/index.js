import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";

import CircleImgButton from "../../components/CircleImgButton";
import RoundButton from "../../components/RoundButton";
import FGallery from "../../components/FGallery";
import ScrollUpButton from "react-scroll-up-button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "./index.scss";
const { requestSignIn } = userActions;

class AboutSection extends Component {
  state = {
    btn_show: false
  };
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  onBack = () => {
    let page_main = document.getElementById("main");
    let page_about = document.getElementById("about");

    page_main.classList.remove("is-hidden");
    page_about.classList.add("is-hidden");

    setTimeout(() => {
      page_about.classList.remove("is-visible");
      page_about.classList.remove("is-hidden");
    }, 600);
  };

  onSubmit = () => {};

  componentDidMount() {}

  onScroll = event => {
    const position = event.target.scrollTop;
    const SHOW_POSITION = 300;
    const { btn_show } = this.state;
    if (position > SHOW_POSITION) {
      if (!btn_show) {
        this.setState({ btn_show: true });
      }
    } else {
      if (btn_show) {
        this.setState({ btn_show: false });
      }
    }
  };

  render() {
    const { t } = this.props;
    const { btn_show } = this.state;
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
      <section
        id="about"
        className="content-section about"
        onScroll={this.onScroll}
      >
        <ScrollUpButton
          ShowAtPosition={400}
          EasingType="easeOutCubic"
          AnimationDuration={500}
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
          // style={{ width: "50px", right: "calc(50% - 25px)", opacity: "1" }}
          // ToggledStyle={{ right: 100 }}
        >
          <CircleImgButton
            src="images/btn_back.png"
            id="about-scroll-up"
            // className="section-close"
            width="40px"
            shadow={true}
          />
        </ScrollUpButton>
        {/* {btn_show && (
          <div className="coomponent-scroll-up-btn">
            <CircleImgButton
              src="images/btn_back.png"
              id="about-scroll-up"
              // className="section-close"
              width="40px"
              shadow={true}
            />
          </div>
        )} */}
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
              <div className="section-controls" style={{ overflow: "initial" }}>
                <CircleImgButton
                  src="images/btn_back.png"
                  id="about-close"
                  className="section-close"
                  width="80px"
                  shadow={true}
                  onClick={this.onBack}
                />
              </div>

              <div className="content-block section-title">
                <h2>{t("about.section-title.h2")}</h2>
                <span>{t("about.section-title.span")}</span>
                <div className="mobile_bg">
                  <img src="images/about_mobile_bg.png" />
                </div>
                <p>{t("about.section-title.p")}</p>
              </div>
              <FGallery galleries={galleries} />

              <div className="mobile_bg">
                <img src="images/about_mobile_bg_2.png" />
              </div>
              <div
                className="content-block about-bottom-container"
                style={{
                  backgroundImage: "url('images/about_bottom.png')"
                }}
              >
                <div className="about-bottom-container__title">
                  {t("about.bottom-1")}
                </div>
                <div className="about-bottom-container__title">
                  {t("about.bottom-2")}
                </div>
                <div
                  className="col-lg-7 col-md-10 col-sm-12 about-sign-up-form-container"
                  style={{ marginTop: "30px" }}
                >
                  <ValidatorForm
                    ref="about-form"
                    onSubmit={this.onSubmit}
                    // onError={errors => console.log(errors)}
                    className="sign-up-form"
                  >
                    <div className="sign-up-form__inline-grow">
                      <TextValidator
                        id="about-email"
                        label={t("about.form.email")}
                        margin="normal"
                        name="email"
                        // value={this.state.user.fullname}
                        // onChange={ev => this.handleChange(ev, "email")}
                        style={{ width: "100%" }}
                        validators={["required", "isEmail"]}
                        errorMessages={[
                          "this field is required",
                          "email is not valid"
                        ]}
                      />
                    </div>
                    <RoundButton label={t("about.form.get-early-access")} />
                  </ValidatorForm>
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
