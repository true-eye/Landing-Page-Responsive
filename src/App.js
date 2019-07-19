import React, { Suspense } from "react";
import { compose } from "recompose";
import { Route, Switch, withRouter } from "react-router-dom";

import MainPage from "./containers/MainPage";

import "./i18n";
const App = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </Suspense>
);

export default compose(withRouter)(App);
