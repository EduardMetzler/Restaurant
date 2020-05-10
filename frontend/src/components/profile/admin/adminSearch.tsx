import React, { useState, useEffect } from "react";
import { AppState } from "../../../store/model";
import { connect } from "react-redux";
import { UserListeDaten } from "../../../store/admin/admin.model";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";
import M from "materialize-css";
import { bufferToggle } from "rxjs/operators";
type AdminSerarhFunktion = (item: any) => void;

interface ConnectedState {
  adminSerarhFunktion: AdminSerarhFunktion;
}

const mapStateToProps = (state: AppState) => ({});

export const AdminSearchComponent: React.FC<ConnectedState> = ({
  adminSerarhFunktion,
}) => {
  return (
    <input onChange={(event) => adminSerarhFunktion(event.target.value)} />
  );
};

export const AdminSearch = connect(mapStateToProps)(AdminSearchComponent);
