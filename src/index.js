import React from "react";
import { render } from "react-dom";
import Root from "./components/Root";
import configureStore from "./configureStore";

//import { fetchItems } from "./api";

//fetchItems("all_tasks").then(items => console.log(items));

const store = configureStore();

render(<Root store={store} />, document.getElementById("root"));
