import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import RoundButton from "../../components/RoundButton";

import "./index.scss";
import FLabel from "../../components/FLabel";
import FInput from "../../components/FInput";
import CircleImgButton from "../../components/CircleImgButton";
const { requestSignIn } = userActions;

class HomeSection extends Component {
  componentDidMount() {}

  render() {
    return (
      <section id="main" className="main loaded">
        <div className="container-fluid fullheight">
          <div className="main-intro col-xs-12 col-lg-6">
            <div className="intro-content">
              <div className="logo">
                <img
                  src="images/logo.png"
                  alt="Flipptap comming soon"
                  title="Flipptap comming soon"
                  style={{ width: "134px", height: "30px" }}
                />
              </div>

              <div className="menu">
                <nav>
                  <ul>
                    <li>
                      <a href="#" id="about-trigger">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#" id="works-trigger">
                        How It Works
                      </a>
                    </li>
                    <li>
                      <a href="#" id="contact-trigger">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="socials">
                <ul>
                  <li>
                    <CircleImgButton
                      src="images/social_facebook.png"
                      className="social_button"
                      href="https://www.facebook.com/"
                    />
                  </li>
                  <li>
                    <CircleImgButton
                      src="images/social_skype.png"
                      className="social_button"
                    />
                  </li>
                  <li>
                    <CircleImgButton
                      src="images/social_instagram.png"
                      className="social_button"
                    />
                  </li>
                  <li>
                    <CircleImgButton
                      src="images/social_share.png"
                      className="social_button"
                    />
                  </li>
                  <li>
                    <div className="social-line" />
                  </li>
                </ul>
              </div>

              <div className="headline">
                <h1>
                  A better job matching app to find opportunities in Canada
                </h1>
                <p className="headline-text">
                  Flipptap is a social networking app matching jobs in Canada
                  for students, professionals and international skilled workers.
                </p>
                <div className="sign-up-form">
                  <div className="sign-up-form__inline-grow">
                    <FLabel label="Full Name" />
                    <FInput />
                  </div>
                  <div className="sign-up-form__inline-grow">
                    <FLabel label="Email ID" />
                    <FInput />
                  </div>
                  <RoundButton label="TRY FOR FREE" />
                </div>
                <p className="headline-bottom-text">
                  By signing up, you agree to Flipptap’s Terms and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>

          <div className="main-media col-xs-12 col-lg-6">
            <div
              className="image"
              style={{ backgroundImage: "url('images/home_bg.png')" }}
            >
              <div className="btn_get_started_wrapper">
                <RoundButton label="GET STARTED" id="btn_get_started" />
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
)(HomeSection);
