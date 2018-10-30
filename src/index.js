import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import items  from "./reducers/items";
import App from "./components/App";

const initialState = {
  items: []
};

const store = compose(applyMiddleware(thunk))(createStore)(
  items,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
