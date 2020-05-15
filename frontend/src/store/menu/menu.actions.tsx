export const MENU_LOAD = "MENU_LOAD";
export const MENU_SAVE = "MENU_SAVE";

export const menuLoad = () => ({
  type: MENU_LOAD,
  payload: {},
});

export const menuSave = (menu: []) => ({
  type: MENU_SAVE,
  payload: { menu },
});
