import { ofType } from "redux-observable";
import { ActionsObservable } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  ALL_USER_LISTE_LOAD,
  allUsersLoad,
  useListeSave,
  DISH_UPLOAD_IMAGE,
  dishUploadImage,
  dishAddUploadedImage,
  NEW_DISH_UPLOAD,
  newDishAdd,
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

const epicUploadImage = (action$: any) =>
  action$.pipe(
    ofType<ReturnType<typeof dishUploadImage>>(DISH_UPLOAD_IMAGE),
    mergeMap(({ payload }) =>
      ajax({
        url: "https://api.cloudinary.com/v1_1/eduardmetzler/image/upload",
        method: "POST",
        body: payload.data,
      }).pipe(
        mergeMap((response) => {
          //   return [console.log(response.response.secure_url)];

          return [dishAddUploadedImage(response.response.secure_url)];
        }),
        catchError((error) => {
          return [];
        })
      )
    )
  );

const epicnewDishAdd = (action$: any) =>
  action$.pipe(
    ofType<ReturnType<typeof newDishAdd>>(NEW_DISH_UPLOAD),
    mergeMap(({ payload }) =>
      ajax({
        url: `${BASE_URL}/api/admin/new-dish-add`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
          "auth-token": payload.token,
          authorization: `Baerer ${localStorage.getItem("token")}`,
        },
      }).pipe(
        mergeMap((response) => {
          //   return [console.log(response.response.secure_url)];

          return [];
        }),
        catchError((error) => {
          return [];
        })
      )
    )
  );

export const adminEpics = [epicUserListeLoad, epicUploadImage, epicnewDishAdd];
