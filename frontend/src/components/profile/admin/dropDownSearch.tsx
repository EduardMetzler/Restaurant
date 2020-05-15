import React, { useState, useEffect } from "react";
import { AppState } from "../../../store/model";
import { connect } from "react-redux";
import { UserListeDaten } from "../../../store/admin/admin.model";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";
import M from "materialize-css";
import { bufferToggle } from "rxjs/operators";
type SelectionFunktion = (item: any) => void;

interface ConnectedState {
  selectionFunktion: SelectionFunktion;
}

const mapStateToProps = (state: AppState) => ({});

export const DropDownSearchComponent: React.FC<ConnectedState> = ({
  selectionFunktion,
}) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("alle");

  const items = [
    { id: 1, value: "alle" },
    { id: 2, value: "user" },
    { id: 3, value: "admin" },
  ];

  const handleOnClick = (item: any) => {
    setOpen(!open);
    setSelection(item);
    selectionFunktion(item);
  };
  return (
    <div>
      <div
        tabIndex={1}
        role="button"
        onKeyPress={() => setOpen(!open)}
        onClick={() => setOpen(!open)}
      >
        <div>
          {" "}
          <p>{selection}</p>{" "}
        </div>
        {/* <div>
          <p>{open ? "Close" : "Open"}</p>
        </div> */}
      </div>
      {open && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={() => handleOnClick(item.value)}>
                <span>{item.value}</span>
                {/* <span>wälen</span> */}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const DropDownSearch = connect(mapStateToProps)(DropDownSearchComponent);
