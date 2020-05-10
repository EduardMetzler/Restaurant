import { combineReducers } from "redux";
import { applyMiddleware, createStore, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { authEpics } from "./auth/auth.epics";
import { adminEpics } from "./admin/admin.epics";

import authReducer from "./auth/auth.reducer";
import errorReducer from "./error/error.reducer";
import adminReducer from "./admin/admin.reducer";

const epic = combineEpics(...authEpics, ...adminEpics);

const epicDependencies = {};
const epicMiddleware = createEpicMiddleware({ dependencies: epicDependencies });

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      error: errorReducer,
      admin: adminReducer,
    }),
    undefined,
    composeWithDevTools(compose(applyMiddleware(epicMiddleware)))
  );
  epicMiddleware.run(epic);

  return store;
};
