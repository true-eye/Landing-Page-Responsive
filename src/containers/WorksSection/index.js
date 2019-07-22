import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";

import CircleImgButton from "../../components/CircleImgButton";
import RoundButton from "../../components/RoundButton";
import FInput from "../../components/FInput";
import FLabel from "../../components/FLabel";
import FGallery from "../../components/FGallery";
import "./index.scss";
const { requestSignIn } = userActions;

class WorksSection extends Component {
  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
  }

  onBack = () => {
    let page_main = document.getElementById("main");
    let page_works = document.getElementById("works");

    page_main.classList.remove("is-hidden");
    page_works.classList.add("is-hidden");

    setTimeout(() => {
      page_works.classList.remove("is-visible");
      page_works.classList.remove("is-hidden");
    }, 600);
  };

  render() {
    const { t } = this.props;
    const galleries = [
      {
        image_position: "left",
        image_url: "images/works_1.png",
        heading: t("works.feature-1.span"),
        subheading: t("works.feature-1.p")
      },
      {
        image_position: "right",
        image_url: "images/works_2.png",
        heading: t("works.feature-2.span"),
        subheading: t("works.feature-2.p")
      },
      {
        image_position: "left",
        image_url: "images/works_3.png",
        heading: t("works.feature-3.span"),
        subheading: t("works.feature-3.p")
      }
    ];
    return (
      <section id="works" className="content-section works">
        <div className="container-fluid fullheight">
          <div
            className="scroll works-info _mCS_2"
            style={{
              width: "100%",
              backgroundImage:
                "linear-gradient(223.67deg, #FFC107 0%, #F44336 50.7%, #9C27B0 100%)"
            }}
          >
            <div className="left-pattern">
              <div className="works-mobscreen-backpattern">
                <img src="images/works_static_pattern.png" />
              </div>
              <div className="works-mobscreen">
                <img src="images/works_static_bg.png" />
              </div>
            </div>
            <div className="col-xs-12 col-lg-6" />
            <div
              className="col-xs-12 col-lg-6 blocks-container"
              style={{ paddingBottom: "0px" }}
            >
              <div className="section-controls" style={{ overflow: "initial" }}>
                <CircleImgButton
                  src="images/btn_back_work.png"
                  id="works-close"
                  className="section-close"
                  width="80px"
                  shadow={true}
                  onClick={this.onBack}
                />
              </div>

              <div className="content-block section-title">
                <h2>{t("works.section-title.h2")}</h2>
                <span>{t("works.section-title.span")}</span>
                <div className="mobile_bg">
                  <img src="images/works_mobile_bg.png" />
                </div>
                <p>{t("works.section-title.p1")}</p>
                <p>{t("works.section-title.p2")}</p>
              </div>
              <div className="content-block features">
                <FGallery galleries={galleries} />
              </div>

              <div
                className="content-block works-bottom-container"
                style={{
                  backgroundImage: "url('images/works_bottom.png')"
                }}
              >
                <div className="col-xl-12 works-bottom-container__title">
                  {t("works.bottom-1")}
                  <br />
                  {t("works.bottom-2")}
                </div>
                <div className="col-xs-10 col-md-6 works-form-container">
                  <div className="works-form">
                    <div className="works-form__inline-grow">
                      <FLabel label={t("works.form.label")} />
                    </div>
                    <RoundButton label={t("works.form.button")} />
                  </div>
                </div>
              </div>
            </div>
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
)(WorksSection);
