import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import HomeSection from "../HomeSection";
import ContactSection from "../ContactSection";
import WorksSection from "../WorksSection";
import AboutSection from "../AboutSection";
import FModal from "../../components/FModal";

import { translate } from "../../utils/translation";
import "./index.scss";

const { toggleOopsModal, toggleThankModal } = userActions;
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.t = this.t.bind(this);
  }
  componentDidMount() {}

  t = s => {
    return translate(this.props.currentLang, s);
  };

  render() {
    const { visibleThankModal, visibleOopsModal } = this.props.auth;
    return (
      <>
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
        <HomeSection t={this.t} currentLang={this.props.currentLang} />
        <AboutSection t={this.t} currentLang={this.props.currentLang} />
        <WorksSection t={this.t} currentLang={this.props.currentLang} />
        <ContactSection t={this.t} currentLang={this.props.currentLang} />

        <div className="footer">
          <p className="footer__text">
            Made in Toronto with. All member work copyright of respective owner,
            otherwise © 2019 Flipptop
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authentication,
  currentLang: state.langReducer.currentLang
});

const mapDispatchToProps = dispatch => {
  return {
    toggleThankModal: () => dispatch(toggleThankModal()),
    toggleOopsModal: () => dispatch(toggleOopsModal())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainPage);
