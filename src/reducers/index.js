import { combineReducers } from "redux";
import items, * as fromItems from "./items";

const todoApp = combineReducers({
  items
});

export default todoApp;

export const getVisibleTodos = (state, filter) =>
  fromItems.getVisibleTodos(state.items, filter);
