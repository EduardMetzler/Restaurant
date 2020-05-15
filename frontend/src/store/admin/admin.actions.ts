// import { DishCreate } from "./admin.model";

export const ALL_USER_LISTE_LOAD = "ALL_USER_LISTE_LOAD";
export const USER_LISTE_SAVE = " USER_LISTE_SAVE";
export const DISH_UPLOAD_IMAGE = "USER_LISTE_SAVE";
export const DISH_ADD_UPLOADED_IMAGE = "DISH_ADD_UPLOADED_IMAGE";
export const NEW_DISH_UPLOAD = "NEW_DISH_UPLOAD";

export const allUsersLoad = () => ({
  type: ALL_USER_LISTE_LOAD,
  payload: {},
});

export const useListeSave = (userListe: []) => ({
  type: USER_LISTE_SAVE,
  payload: { userListe },
});

export const dishUploadImage = (data: any) => ({
  type: DISH_UPLOAD_IMAGE,
  payload: { data },
});

export const dishAddUploadedImage = (source: string) => ({
  type: DISH_ADD_UPLOADED_IMAGE,
  payload: { source },
});

export const newDishAdd = (
  name: String,
  ingredients: String,
  image: String | undefined,
  price: String,
  catigory: String
) => ({
  type: NEW_DISH_UPLOAD,
  payload: { name, ingredients, image, price, catigory },
});
