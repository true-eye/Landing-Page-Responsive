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
  componentDidMount() {}

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
            className="scroll scroll-right works-info _mCS_2"
            style={{
              width: "100%"
            }}
          >
            <div
              id="mCSB_2"
              className=" mCS-light mCSB_vertical mCSB_inside"
              tabIndex="0"
            >
              <div
                id="mCSB_2_container"
                className="mCSB_container"
                style={{
                  position: "relative",
                  top: "0px",
                  left: "0px",
                  backgroundImage:
                    "linear-gradient(223.67deg, #FFC107 0%, #F44336 50.7%, #9C27B0 100%)"
                }}
                dir="ltr"
              >
                <div className="col-xs-12 col-lg-6">
                  <div className="works-mobscreen-backpattern">
                    <img src="images/works_static_pattern.png" />
                  </div>
                  <div className="works-mobscreen">
                    <img src="images/works_static_bg.png" />
                  </div>
                </div>
                <div
                  className="col-xs-12 col-lg-6 blocks-container"
                  style={{ paddingBottom: "0px" }}
                >
                  <div className="section-controls">
                    <CircleImgButton
                      src="images/btn_back_work.png"
                      id="works-close"
                      className="section-close"
                      width="80px"
                    />
                  </div>

                  <div className="content-block section-title">
                    <h2>{t("works.section-title.h2")}</h2>
                    <span>{t("works.section-title.span")}</span>
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
                    <div className="col-md-8" style={{ marginTop: "30px" }}>
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
              <div
                id="mCSB_2_scrollbar_vertical"
                className="mCSB_scrollTools mCSB_2_scrollbar mCS-light mCSB_scrollTools_vertical"
                style={{ display: "block" }}
              >
                <div className="mCSB_draggerContainer">
                  <div
                    id="mCSB_2_dragger_vertical"
                    className="mCSB_dragger"
                    style={{
                      position: "absolute",
                      minHeight: "30px",
                      display: "block",
                      height: "839px",
                      maxHeight: "903px",
                      top: "0px"
                    }}
                    onContextMenu={() => {
                      return false;
                    }}
                  >
                    <div
                      className="mCSB_dragger_bar"
                      style={{ lineHeight: "30px" }}
                    />
                  </div>
                  <div className="mCSB_draggerRail" />
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
