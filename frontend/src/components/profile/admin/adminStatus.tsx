import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { AppState } from "../../../store/model";
import { UserListe } from "./userListe";
import { useHistory } from "react-router-dom";

import { allUsersLoad } from "../../../store/admin/admin.actions";
import { UserListeDaten } from "../../../store/admin/admin.model";
import { DishCreate } from "./dishCreate";

interface ConnectedState {
  token?: String | null;

  userListe: UserListeDaten[];
}

const mapStateToProps = (state: AppState) => ({
  token: state.auth.token,

  userListe: state.admin.userListe,
});

export const AdminComponent: React.FC<ConnectedState> = ({
  userListe,
  token,
}) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("ALL_USER");

  if (userListe.length === 0) {
    dispatch(allUsersLoad());
  }
  return (
    <>
      <input
        value="All User"
        type="button"
        onClick={() => setContent("ALL_USER")}
      />
      <input
        value="ein Gericht erstellen"
        type="button"
        onClick={() => setContent("DISH_CREATE")}
      />
      {content === "ALL_USER" ? <UserListe /> : null}
      {content === "DISH_CREATE" ? <DishCreate /> : null}
    </>
  );
};

export const AdminProfile = connect(mapStateToProps)(AdminComponent);
