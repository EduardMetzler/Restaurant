import React, { useState, useEffect } from "react";
import { AppState } from "../../../store/model";
import { connect } from "react-redux";
import { MenuCategory } from "../../../store/menu/menu.model";
// import { UserListeDaten } from "../../../store/admin/admin.model";
type CategoryFunktion = (item: any) => void;

interface ConnectedState {
  categoryFunktion: CategoryFunktion;
  menuCategoryListe: MenuCategory[];
}

const mapStateToProps = (state: AppState) => ({
  menuCategoryListe: state.menu.menuCategoryListe,
});

export const DropDownCategoryComponent: React.FC<ConnectedState> = ({
  categoryFunktion,
  menuCategoryListe,
}) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("Eine Kategorie auswälen");

  const handleOnClick = (item: any) => {
    setOpen(!open);
    setSelection(item);
    categoryFunktion(item);
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
          {menuCategoryListe.map((item, index) => (
            <li key={index}>
              <button type="button" onClick={() => handleOnClick(item.value)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const DropDownCategory = connect(mapStateToProps)(
  DropDownCategoryComponent
);
