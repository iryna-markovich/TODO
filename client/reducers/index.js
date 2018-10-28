import { combineReducers } from "redux";
import items, * as fromItems from "./items";

const todoApp = combineReducers({
  items
});

export default todoApp;

export const getVisibleItems = (state, filter) =>
  fromItems.getVisibleItems(state.items, filter);
