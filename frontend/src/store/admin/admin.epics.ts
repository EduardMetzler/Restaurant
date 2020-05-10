import { ofType } from "redux-observable";
import { ActionsObservable } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  ALL_USER_LISTE_LOAD,
  allUsersLoad,
  useListeSave,
} from "./admin.actions";
import { getErrors, clearErrors } from "../error/error.actions";
import { authError } from "../auth/auth.actions";
export const BASE_URL = "http://localhost:5000";

const epicUserListeLoad = (action$: any) =>
  action$.pipe(
    ofType<ReturnType<typeof allUsersLoad>>(ALL_USER_LISTE_LOAD),
    mergeMap(({ payload }) =>
      ajax({
        url: `${BASE_URL}/api/admin/all-user-load`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": payload.token,
          authorization: `Baerer ${localStorage.getItem("token")}`,
        },
      }).pipe(
        mergeMap((response) => {
          const responseData = response["response"];
          console.log(responseData);

          return [
            useListeSave(responseData["UserListe"]),
            //   responseData["firstName"],
            //   responseData["lastName"],
            //   responseData["status"]
            clearErrors(),
          ];
        }),
        catchError((error) => {
          const responseData = error["response"];

          return [getErrors(responseData["message"])];
        })
      )
    )
  );

export const adminEpics = [epicUserListeLoad];
