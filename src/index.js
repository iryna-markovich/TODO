import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import todoApp from "./reducers";
import Root from "./components/Root";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

const store = createStore(
  todoApp,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

render(<Root store={store} />, document.getElementById("root"));
