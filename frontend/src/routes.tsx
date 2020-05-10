import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AppState } from "./store/model";
import { connect } from "react-redux";

import { Home } from "./page/Home.page";
import { RegisterPage } from "./page/Register.page";
import { LoginPage } from "./page/Login.page";
import { ProfilePage } from "./page/Pfofile.page";

interface ConnectedState {
  isAuthenticated: boolean;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export const RoutesComponent: React.FC<ConnectedState> = ({
  isAuthenticated,
}) => {
  // if (localStorage.getItem("token")) {
  //   return (
  //     <Switch>
  //       <Route path="/" exact>
  //         <Home />
  //       </Route>
  //       <Route path="/profile" exact>
  //         <ProfilePage />
  //       </Route>
  //       <Redirect to="/" />
  //     </Switch>
  //   );
  // }
  return (
    <Switch>
      <Route path="/profile" exact>
        <ProfilePage />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};

export const Routes = connect(mapStateToProps)(RoutesComponent);
