import { combineReducers } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { authEpics } from "./auth/auth.epics";
import { adminEpics } from "./admin/admin.epics";

import authReducer from "./auth/auth.reducer";
import errorReducer from "./error/error.reducer";
import adminReducer from "./admin/admin.reducer";
import menuReducer from "./menu/menu.reducer";
import { menuEpics } from "./menu/menu.epics";

const epic = combineEpics(...authEpics, ...adminEpics, ...menuEpics);

const epicDependencies = {};
const epicMiddleware = createEpicMiddleware({ dependencies: epicDependencies });

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      error: errorReducer,
      admin: adminReducer,
      menu: menuReducer,
    }),
    undefined,
    composeWithDevTools(compose(applyMiddleware(epicMiddleware)))
  );
  epicMiddleware.run(epic);

  return store;
};
