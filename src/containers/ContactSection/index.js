import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import "./index.scss";
import CircleImgButton from "../../components/CircleImgButton";
const { requestSignIn } = userActions;

class ContactSection extends Component {
  componentDidMount() {}

  render() {
    return (
      <section id="contact" className="content-section contact">
        <div className="container-fluid fullheight">
          <div className="scroll scroll-right contact-info mCustomScrollbar _mCS_3 mCS_no_scrollbar">
            <div
              id="mCSB_3"
              className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
              tabIndex="0"
            >
              <div
                id="mCSB_3_container"
                className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                style={{ position: "relative", top: "0", left: "0" }}
                dir="ltr"
              >
                <div className="blocks-container">
                  <div className="section-controls">
                    <CircleImgButton
                      src="images/btn_back.png"
                      id="contact-close"
                      className="section-close"
                      width="80px"
                    />
                  </div>

                  <div className="content-block section-title">
                    <h2>Get a job fast</h2>
                    <span>
                      Subscribe now to get jobs and opportunities in Canada.
                    </span>
                    <p className="text-m">
                      We’re in beta, soon to be released in October 2019. Join
                      the community to discover the startups and companies in
                      Canada hiring now, tips & tricks on becoming an
                      entrepreneur, becoming an expat and more.
                    </p>
                  </div>

                  <div className="content-block contact-data">
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 contact-data-item">
                        <i className="icon ion-ios-location" />
                        <p>
                          11 West 53 Street
                          <br />
                          New York, NY
                          <br />
                          10019
                        </p>
                      </div>

                      <div className="col-xs-12 col-sm-6 contact-data-item">
                        <i className="icon ion-android-share-alt" />
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              Facebook
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/" target="_blank">
                              Twitter
                            </a>
                          </li>
                          <li>
                            <a href="https://dribbble.com/" target="_blank">
                              Dribbble
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-12 col-sm-6 contact-data-item">
                        <i className="icon ion-android-call" />
                        <p>
                          <a href="tel:+12127089400">+1 212-708-9400</a>
                        </p>
                      </div>

                      <div className="col-xs-12 col-sm-6 contact-data-item">
                        <i className="icon ion-edit" />
                        <p>
                          <a href="mailto:example@example.com?subject=Message%20from%20your%20site">
                            example@example.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-buttons">
                    <a
                      href="#"
                      className="btn btn-l btn-dark-outline"
                      id="contactform-trigger"
                    >
                      <span className="btn-caption">Write a line</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="mCSB_3_scrollbar_vertical"
                className="mCSB_scrollTools mCSB_3_scrollbar mCS-light mCSB_scrollTools_vertical"
                style={{ display: "none" }}
              >
                <div className="mCSB_draggerContainer">
                  <div
                    id="mCSB_3_dragger_vertical"
                    className="mCSB_dragger"
                    style={{
                      position: "relative",
                      minHeight: "30px",
                      height: "0px",
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

          <div className="contact-media col-xs-12 col-lg-6">
            <div
              className="image"
              style={{ backgroundImage: "url('images/contact_bg.png')" }}
            >
              <div className="contact-media__subtitle-container">
                Launching soon in <br />
                Toronto
              </div>
              <div className="contact-media__addon-container">
                <span className="contact-media__addon addon-left">
                  #madeinthe6ix
                </span>
                <span className="contact-media__addon">#shareyoursuccess</span>
                <span className="contact-media__addon addon-right">
                  #wethenorth
                </span>
              </div>
              <div className="contact-media__social-container">
                <div className="contact-media__social social-left">
                  <CircleImgButton src="/images/social_facebook.png" />
                </div>
                <div className="contact-media__social">
                  <CircleImgButton src="/images/social_skype.png" />
                </div>
                <div className="contact-media__social social-right">
                  <CircleImgButton src="/images/social_instagram.png" />
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
)(ContactSection);
