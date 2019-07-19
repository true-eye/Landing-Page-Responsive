import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { langActions } from "../../actions";
import RoundButton from "../../components/RoundButton";

import FLabel from "../../components/FLabel";
import FInput from "../../components/FInput";
import CircleImgButton from "../../components/CircleImgButton";
import "./index.scss";
const { changeLang } = langActions;

class HomeSection extends Component {
  state = {
    showDropdown: false
  };
  constructor(props) {
    super(props);
    this.onChangeLang = this.onChangeLang.bind(this);
  }

  componentDidMount() {}

  onChangeLang = lang => {
    this.props.changeLang(lang);
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
                <div className="sign-up-form">
                  <div className="sign-up-form__inline-grow">
                    <FLabel label={t("home.sign-up-form.fullname")} />
                    <FInput />
                  </div>
                  <div className="sign-up-form__inline-grow">
                    <FLabel label={t("home.sign-up-form.email")} />
                    <FInput />
                  </div>
                  <RoundButton label={t("home.sign-up-form.button")} />
                </div>
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
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authentication
});

const mapDispatchToProps = dispatch => {
  return {
    changeLang: newLang => dispatch(changeLang(newLang))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HomeSection);
