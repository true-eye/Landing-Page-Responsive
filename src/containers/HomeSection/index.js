import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { langActions, userActions } from "../../actions";
import RoundButton from "../../components/RoundButton";

import FLabel from "../../components/FLabel";
import FInput from "../../components/FInput";
import CircleImgButton from "../../components/CircleImgButton";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import "./index.scss";
import FModal from "../../components/FModal";
const { changeLang } = langActions;
const { requestSignUp, toggleOopsModal, toggleThankModal } = userActions;

class HomeSection extends Component {
  state = {
    showDropdown: false,
    user: {
      fullname: "",
      email: ""
    }
  };
  constructor(props) {
    super(props);
    this.onChangeLang = this.onChangeLang.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  onChangeLang = lang => {
    this.props.changeLang(lang);
  };

  onSignup = () => {
    console.log(this.state.user);
    this.props.requestSignUp(this.state.user);
  };

  handleChange = (ev, key) => {
    let user = { ...this.state.user };
    user[key] = ev.target.value;
    this.setState({ user });
  };

  render() {
    const { currentLang } = this.props;
    const { t } = this.props;

    const langOptions = [
      { flag_url: "images/lang_en.png", label: "EN", value: "en" },
      { flag_url: "images/lang_en.png", label: "FR", value: "fr" }
    ];

    const langHash = {
      en: 0,
      fr: 1
    };

    const { loading, visibleThankModal, visibleOopsModal } = this.props.auth;

    return (
      <section id="main" className="main loaded">
        <div className="container-fluid fullheight">
          <div className="main-intro col-xs-12 col-lg-6">
            <div className="intro-mobile-gradient" />

            <div className="bg-mobile">
              <img src="images/home_bg.png" style={{ width: "100%" }} />
            </div>
            <div className="intro-content">
              <div className="logo">
                <img
                  src="images/logo.png"
                  style={{ width: "134px", height: "30px" }}
                />
              </div>
              <div className="logo-mobile">
                <img
                  src="images/logo_mobile.png"
                  style={{ width: "134px", height: "30px" }}
                />
              </div>

              <div className="menu">
                <nav>
                  <ul>
                    <li>
                      <a href="#" id="about-trigger">
                        {t("navbar.about-us")}
                      </a>
                    </li>
                    <li>
                      <a href="#" id="works-trigger">
                        {t("navbar.how-it-works")}
                      </a>
                    </li>
                    <li>
                      <a href="#" id="contact-trigger">
                        {t("navbar.contact-us")}
                      </a>
                    </li>
                    <div className="dropdown lang-dropdown">
                      <button className="dropbtn">
                        <img
                          src={langOptions[langHash[currentLang]].flag_url}
                        />
                        {langOptions[langHash[currentLang]].label}
                      </button>
                      <div className="dropdown-content">
                        {langOptions.map((lang, index) => {
                          return (
                            <a
                              key={index}
                              onClick={() => this.onChangeLang(lang.value)}
                            >
                              <img src={lang.flag_url} />
                              {lang.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>
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
                <h1>{t("home.headline.h1")}</h1>
                <p className="headline-text">
                  {t("home.headline.headline-text")}
                </p>
                <ValidatorForm
                  ref="form"
                  onSubmit={this.onSignup}
                  onError={errors => console.log(errors)}
                  className="sign-up-form"
                >
                  <div className="sign-up-form__inline-grow">
                    <TextValidator
                      id="home-fullname"
                      label={t("home.sign-up-form.fullname")}
                      margin="normal"
                      name="fullname"
                      value={this.state.user.fullname}
                      onChange={ev => this.handleChange(ev, "fullname")}
                      style={{ width: "100%" }}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                  </div>
                  <div className="sign-up-form__inline-grow">
                    <TextValidator
                      id="home-email"
                      label={t("home.sign-up-form.email")}
                      margin="normal"
                      name="email"
                      value={this.state.user.email}
                      onChange={ev => this.handleChange(ev, "email")}
                      style={{ width: "100%" }}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required",
                        "email is not valid"
                      ]}
                    />
                  </div>
                  <RoundButton
                    label={t("home.sign-up-form.button")}
                    type="submit"
                    disabled={loading}
                    loading={loading}
                  />
                </ValidatorForm>
                <p className="headline-bottom-text">
                  {t("home.headline.headline-bottom-text")}
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
                <RoundButton
                  label={t("home.button.get-started")}
                  id="btn_get_started"
                />
              </div>
            </div>
          </div>
        </div>
        {visibleThankModal && (
          <FModal id="modal-thankyou" onClose={this.props.toggleThankModal}>
            <div className="modal-thankyou-body">
              <img src="/images/modal_thankyou.png" />
              <h4>for signing up to Flipptap!</h4>
              <p>
                We are working hard so you can see Flipptap in your city very
                soon.Our goal is to help as many people as possible to find
                their dream job without all the constraint. Finding a job where
                you can feel empowered is the key for a better life.
                <br />
                <br />
                In the meantime, we’re going to send fun stuff like tips on how
                to work abroad, exclusive employment opportunities and other
                exciting updates.
              </p>
            </div>
          </FModal>
        )}
        {visibleOopsModal && (
          <FModal id="modal-oops" onClose={this.props.toggleOopsModal}>
            <div className="modal-oops-body">
              <h2>Oops</h2>
              <p>
                Oops, it looks like this email address is already in our system.
                Stay tuned for Flipptap updates coming your way.
              </p>
            </div>
          </FModal>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authentication
});

const mapDispatchToProps = dispatch => {
  return {
    changeLang: newLang => dispatch(changeLang(newLang)),
    requestSignUp: user => dispatch(requestSignUp(user)),
    toggleThankModal: () => dispatch(toggleThankModal()),
    toggleOopsModal: () => dispatch(toggleOopsModal())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomeSection);
