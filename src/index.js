import React from "react";
import { render } from "react-dom";
import Root from "./components/Root";
import configureStore from "./configureStore";
import { fetchTodos } from "./api";

fetchTodos("all_tasks").then(items => console.log(items));

const store = configureStore();

render(<Root store={store} />, document.getElementById("root"));
