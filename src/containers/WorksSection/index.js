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

class WorksSection extends Component {
  componentDidMount() {}

  render() {
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
                    <h2>How to look for a job and network on Flipptap</h2>
                    <span>
                      Flipptap lets you share your story and career achievements
                      through photos directly to your profile. Updating your
                      resume, through daily professional accomplishments.
                    </span>
                    <p>
                      Are you a student looking for part-time jobs or co-op
                      opportunities? Are you an experienced professional looking
                      to grow your network? Or are you a new immigrant to Canada
                      looking for work?
                    </p>
                    <p>
                      With Flipptap, use our unique filter tailored to suit your
                      needs for both job searching and growing your professional
                      network. Share photos of your career achievements to your
                      professional profile.
                    </p>
                  </div>
                  <div className="content-block features">
                    <div className="col-xs-12 feature-item feature-item-left">
                      <div
                        className="col-xs-12 col-sm-6 feature-image "
                        style={{
                          backgroundImage: "url('images/works_1.png')"
                        }}
                      />
                      <div className="col-xs-12 col-sm-6 feature-description">
                        <span>Filter</span>
                        <p className="text-s">
                          by location, salary, open work permit, reviews, job
                          title etc.
                        </p>
                      </div>
                    </div>

                    <div className="col-xs-12 feature-item feature-item-right">
                      <div
                        className="col-xs-12 col-sm-6 feature-image"
                        style={{
                          backgroundImage: "url('images/works_2.png')"
                        }}
                      />
                      <div className="col-xs-12 col-sm-6 feature-description">
                        <span>Swipe Opportunities</span>
                        <p className="text-s">
                          Swipe through Job Stories to discover all the
                          information you need. See photos of team culture,
                          reviews, location etc. If you’re interested and want
                          to find out more, swipe right to informally apply.
                        </p>
                      </div>
                    </div>

                    <div className="col-xs-12 feature-item feature-item-left">
                      <div
                        className="col-xs-12 col-sm-6 feature-image"
                        style={{
                          backgroundImage: "url('images/works_3.png')"
                        }}
                      />
                      <div className="col-xs-12 col-sm-6 feature-description">
                        <span>Chat Directly</span>
                        <p className="text-s">
                          If you match with the employer, you will be able to
                          directly chat with the hiring team to find out more
                          information, schedule interviews, etc.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="content-block works-bottom-container"
                    style={{
                      backgroundImage: "url('images/works_bottom.png')"
                    }}
                  >
                    <div className="col-xl-12 works-bottom-container__title">
                      Empowering <br />
                      Job Seekers Everywhere
                    </div>
                    <div className="col-md-8" style={{ marginTop: "30px" }}>
                      <div className="works-form">
                        <div className="works-form__inline-grow">
                          <FLabel label="Email me when it's ready" />
                        </div>
                        <RoundButton label="SEND" />
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
