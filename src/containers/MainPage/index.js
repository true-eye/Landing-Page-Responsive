import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import HomeSection from "../HomeSection";
import ContactSection from "../ContactSection";
import WorksSection from "../WorksSection";
import AboutSection from "../AboutSection";

import { translate } from "../../utils/translation";
import "./index.scss";
const { requestSignIn } = userActions;

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
    return (
      <>
        <HomeSection t={this.t} currentLang={this.props.currentLang} />
        {/* <AboutSection t={this.t} currentLang={this.props.currentLang} />
        <WorksSection t={this.t} currentLang={this.props.currentLang} />
        <ContactSection t={this.t} currentLang={this.props.currentLang} /> */}

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
    requestSignIn
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainPage);
