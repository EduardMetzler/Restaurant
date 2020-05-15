import { ofType } from "redux-observable";
import { ActionsObservable } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { MENU_LOAD, menuLoad, menuSave } from "./menu.actions";

export const BASE_URL = "http://localhost:5000";

const epicMenuListeLoad = (action$: any) =>
  action$.pipe(
    ofType<ReturnType<typeof menuLoad>>(MENU_LOAD),
    mergeMap(({ payload }) =>
      ajax({
        url: `${BASE_URL}/api/menu/menu-load`,
        method: "GET",
      }).pipe(
        mergeMap((response) => {
          const responseData = response["response"];
          console.log(responseData);

          return [menuSave(responseData["Menu"])];
        }),
        catchError((error) => {
          const responseData = error["response"];

          return [];
        })
      )
    )
  );
export const menuEpics = [epicMenuListeLoad];
