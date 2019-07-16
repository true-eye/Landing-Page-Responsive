import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";

import "./index.scss";
import CircleImgButton from "../../components/CircleImgButton";
const { requestSignIn } = userActions;

class AboutSection extends Component {
  componentDidMount() {}

  render() {
    return (
      <section id="about" className="content-section about">
        <div className="container-fluid fullheight">
          <div
            className="scroll scroll-right about-info _mCS_1"
            style={{
              width: "100%"
            }}
          >
            <div
              id="mCSB_1"
              className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
              tabIndex="0"
            >
              <div
                id="mCSB_1_container"
                className="mCSB_container"
                style={{
                  position: "relative",
                  top: "0px",
                  left: "0px",
                  backgroundImage: "linear-gradient(#2065FF, #07e2ef)"
                }}
                dir="ltr"
              >
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
                    <h2>
                      A job search is depressing; so we introduced Job Stories
                    </h2>
                    <span>
                      Flipptap created Job Stories so can discover more about
                      companies, than just a job description.
                    </span>
                    <p>
                      A job search is very personal. As millenials, whether
                      you’re looking for full-time or part time jobs,
                      work-abroad opportunities, remote jobs, contract roles or
                      co-op opportunities, you’re seeking:
                    </p>
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
                        <span>A position that fits your needs.</span>
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
                        <span>Suits your personality & lifestyle.</span>
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
                        <span>
                          Awesome company culture that's reflected in reviews
                        </span>
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
                        <span>A great location</span>
                        <p className="text-s">
                          An employer that is close enough to commute or
                          relocate without impacting your family, friends &
                          daily life.
                        </p>
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
                        <span>Ability to Work Abroad</span>
                        <p className="text-s">
                          An employer that is willing to offer open work
                          permits, remote opportunities or work-abroad
                          experience. #expat #digitalnomad
                        </p>
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
                      Guess What - Rarely is this Information Included in the
                      Job Description!
                      <br />
                      <br />
                      That’s where Flipptap comes in....
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="mCSB_1_scrollbar_vertical"
                className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
                style={{ display: "block" }}
              >
                <div className="mCSB_draggerContainer">
                  <div
                    id="mCSB_1_dragger_vertical"
                    className="mCSB_dragger"
                    style={{
                      position: "absolute",
                      minHeight: "30px",
                      display: "block",
                      height: "30px",
                      minHeight: "902px",
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
)(AboutSection);
