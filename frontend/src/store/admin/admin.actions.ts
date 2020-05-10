export const ALL_USER_LISTE_LOAD = "ALL_USER_LISTE_LOAD";
export const USER_LISTE_SAVE = " USER_LISTE_SAVE";

export const allUsersLoad = () => ({
  type: ALL_USER_LISTE_LOAD,
  payload: {},
});

export const useListeSave = (userListe: []) => ({
  type: USER_LISTE_SAVE,
  payload: { userListe },
});
