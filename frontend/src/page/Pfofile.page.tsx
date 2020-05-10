import React from "react";
import { AppState } from "../store/model";
import { connect } from "react-redux";
import { AdminProfile } from "../components/profile/admin/adminStatus";
import { UserProfile } from "../components/profile/user/userStatus";

interface ConnectedState {
  status: String;
}

const mapStateToProps = (state: AppState) => ({
  status: state.auth.user.status,
  //   status: "admin",
});

export const ProfileComponent: React.FC<ConnectedState> = ({ status }) => {
  if (status === "user") {
    return <UserProfile />;
  } else if (status === "admin") {
    return <AdminProfile />;
  }

  return <div>04</div>;
};

export const ProfilePage = connect(mapStateToProps)(ProfileComponent);
