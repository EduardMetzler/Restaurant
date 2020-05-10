import { Action } from "redux";
import { AdminStore } from "./admin.model";

import {
  ALL_USER_LISTE_LOAD,
  USER_LISTE_SAVE,
  useListeSave,
} from "./admin.actions";

const INITIAL_STATE = {
  userListe: [],
};

export default (
  state: AdminStore = INITIAL_STATE,
  action: Action
): AdminStore => {
  switch (action.type) {
    case USER_LISTE_SAVE:
      const userListe = action as ReturnType<typeof useListeSave>;

      return { ...state, userListe: userListe.payload.userListe };

    default:
      return state;
  }
};
