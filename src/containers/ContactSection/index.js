import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import CircleImgButton from "../../components/CircleImgButton";
import RoundButton from "../../components/RoundButton";
import TextField from "@material-ui/core/TextField";
import "./index.scss";
const { requestSignIn } = userActions;

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
  }

  onBack = () => {
    let page_main = document.getElementById("main");
    let page_contact = document.getElementById("contact");

    page_main.classList.remove("is-hidden");
    page_contact.classList.add("is-hidden");

    setTimeout(() => {
      page_contact.classList.remove("is-visible");
      page_contact.classList.remove("is-hidden");
    }, 600);
  };

  render() {
    const { t } = this.props;
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
                  <div
                    className="section-controls"
                    style={{ overflow: "initial" }}
                  >
                    <CircleImgButton
                      src="images/btn_back.png"
                      id="contact-close"
                      className="section-close"
                      width="80px"
                      shadow={true}
                      onClick={this.onBack}
                    />
                  </div>

                  <div className="content-block section-title">
                    <h2>{t("contact.section-title.h2")}</h2>
                    <span>{t("contact.section-title.span")}</span>
                    <p className="text-m">{t("contact.section-title.p")}</p>

                    <div className="col-md-10 contact-form">
                      <div className="row">
                        <div
                          className="col-md-6"
                          style={{ paddingRight: "10px" }}
                        >
                          <TextField
                            id="contact-fullname"
                            label={t("contact.form.fullname")}
                            defaultValue="Cameroon Masse"
                            // className={classes.textField}
                            // value={values.name}
                            // onChange={handleChange("name")}
                            margin="normal"
                            style={{ width: "100%" }}
                          />
                        </div>

                        <div className="col-md-6">
                          <TextField
                            id="contact-email"
                            label={t("contact.form.email")}
                            // className={classes.textField}
                            margin="normal"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <TextField
                          id="contact-city"
                          label={t("contact.form.city")}
                          // className={classes.textField}
                          margin="normal"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <RoundButton label={t("contact.button.learn-more")} />
                      <div className="contact-footer">
                        <ul>
                          <li>
                            <a className="contact-footer__link">
                              info@flipptap.com
                            </a>
                          </li>
                          <li>
                            <a className="contact-footer__link">
                              Terms & Conditions
                            </a>
                          </li>
                          <li>
                            <a className="contact-footer__link">
                              Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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
