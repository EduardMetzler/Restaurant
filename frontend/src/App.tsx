import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";

import "./App.css";

import "materialize-css";
import { AppState } from "./store/model";
import { Navbar } from "./components/navbar/navbar";

const App = ({}) => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
// export const App = connect(mapStateToProps)(AppComponent);
