import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../store/model";

interface ConnectedState {
  // isAuthenticated: boolean;
  // token?: String | null;
  // user: UserDaten;
}

const mapStateToProps = (state: AppState) => ({
  // isAuthenticated: state.auth.isAuthenticated,
  // token: state.auth.token,
  // user: state.auth.user,
});

export const UserComponent: React.FC<ConnectedState> = ({}) => {
  return <div>user</div>;
};

export const UserProfile = connect(mapStateToProps)(UserComponent);
