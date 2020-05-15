import { Action } from "redux";
import { MenuStore } from "./menu.model";

import { MENU_SAVE, menuSave } from "./menu.actions";

const INITIAL_STATE = {
  allDishs: [],
  menuCategoryListe: [
    { id: "1", value: "Fisch" },
    { id: "2", value: "Fleisch" },
    { id: "3", value: "Salat" },
  ],
};

export default (
  state: MenuStore = INITIAL_STATE,
  action: Action
): MenuStore => {
  switch (action.type) {
    case MENU_SAVE:
      const menu = action as ReturnType<typeof menuSave>;
      return {
        ...state,
        allDishs: menu.payload.menu,
      };
    default:
      return state;
  }
};
