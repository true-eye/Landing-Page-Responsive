import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";

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
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="icon ion-social-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="icon ion-social-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://dribbble.com/" target="_blank">
                      <i className="icon ion-social-dribbble-outline" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank">
                      <i className="icon ion-social-github" />
                    </a>
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
                <a
                  href="#"
                  className="btn btn-l btn-dark-outline"
                  id="notify-trigger"
                >
                  <span className="btn-caption">Notify me</span>
                </a>
              </div>
            </div>
          </div>

          <div className="main-media col-xs-12 col-lg-6">
            <div
              className="image"
              style={{ backgroundImage: "url('images/home_bg.png')" }}
            />
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
