import React from "react";
import { AppState } from "../store/model";
import { connect } from "react-redux";

import { Menu } from "../components/menu/menu";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const MenuComponent: React.FC<ConnectedState> = ({}) => {
  // return <div>ffffffffff</div>;
  return <Menu />;
};

export const MenuPage = connect(mapStateToProps)(MenuComponent);
