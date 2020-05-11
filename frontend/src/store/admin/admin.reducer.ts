import { Action } from "redux";
import { AdminStore } from "./admin.model";

import {
  ALL_USER_LISTE_LOAD,
  USER_LISTE_SAVE,
  useListeSave,
  DISH_ADD_UPLOADED_IMAGE,
  dishAddUploadedImage,
} from "./admin.actions";

const INITIAL_STATE = {
  userListe: [],
  isLoading: false,
  uploadedImages: "",
  //   newDish: { name: "", ingredients: "", image: "" },
};

export default (
  state: AdminStore = INITIAL_STATE,
  action: Action
): AdminStore => {
  switch (action.type) {
    case USER_LISTE_SAVE:
      const userListe = action as ReturnType<typeof useListeSave>;

      return { ...state, userListe: userListe.payload.userListe };

    case DISH_ADD_UPLOADED_IMAGE:
      const dishAddUploadedImageAction = action as ReturnType<
        typeof dishAddUploadedImage
      >;
      return {
        ...state,
        uploadedImages: dishAddUploadedImageAction.payload.source,
      };

    default:
      return state;
  }
};
