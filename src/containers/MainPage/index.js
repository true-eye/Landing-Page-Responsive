import React, { Component } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { userActions } from "../../actions";
import HomeSection from "../HomeSection";
import ContactSection from "../ContactSection";
import WorksSection from "../WorksSection";
import AboutSection from "../AboutSection";

const { requestSignIn } = userActions;

class MainPage extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <HomeSection />
        <AboutSection />
        <WorksSection />
        <ContactSection />
      </>
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
)(MainPage);
