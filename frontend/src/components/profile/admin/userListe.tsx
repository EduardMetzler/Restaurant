import React, { useState, useEffect } from "react";
import { AppState } from "../../../store/model";
import { connect } from "react-redux";
import { UserListeDaten } from "../../../store/admin/admin.model";

import "react-dropdown/style.css";

import { DropDownSearch } from "./dropDownSearch";
import { AdminSearch } from "./adminSearch";

type SelectionFunktion = (item: any) => void;
type AdminSerarhFunktion = (item: any) => void;

interface ConnectedState {
  userListe?: UserListeDaten[];
}

const mapStateToProps = (state: AppState) => ({
  userListe: state.admin.userListe,
});

export const UserListeComponent: React.FC<ConnectedState> = ({ userListe }) => {
  const [selectUserStatus, setSelectUserStatus] = useState("alle");
  const [adminSerarhResultState, setAdminSerarhResultState] = useState([]);

  const selectionFunktion: SelectionFunktion = (item: any) => {
    setSelectUserStatus(item);
  };
  const adminSerarhFunktion: AdminSerarhFunktion = (searchInput: any) => {
    console.log(searchInput);
    // setSelectUserStatus([])
    if (searchInput !== "") {
      const selectUserListe = userListe?.filter((user) => {
        if (selectUserStatus === "alle") {
          return user;
        } else {
          return user.status === selectUserStatus;
        }
      });
      console.log(selectUserListe);
      const includes: any = selectUserListe?.filter((include) =>
        // include.email?.includes(searchInput)
        include.email?.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(includes);
      setAdminSerarhResultState(includes);
    } else {
      setAdminSerarhResultState([]);
    }

    // setSelectUserStatus(item);
    //     const includes = await items.filter((item) =>
    //     item.name.toLowerCase().includes(text.toLowerCase())
    //   );

    //   const includesName = includes.map((include) => include.name);
  };
  const adminSerarhResult: UserListeDaten[] = adminSerarhResultState;
  const selectUserListe = userListe?.filter((user) => {
    if (selectUserStatus === "alle") {
      return user;
    } else {
      return user.status === selectUserStatus;
    }
  });

  return (
    <>
      <div>
        {" "}
        <DropDownSearch selectionFunktion={selectionFunktion} />
        <AdminSearch adminSerarhFunktion={adminSerarhFunktion} />
      </div>
      <table className="highlight centered">
        <thead>
          <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        {adminSerarhResult.length !== 0 ? (
          <tbody>
            {adminSerarhResult?.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            {selectUserListe?.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </>
  );
};

export const UserListe = connect(mapStateToProps)(UserListeComponent);
