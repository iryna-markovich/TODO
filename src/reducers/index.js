import { combineReducers } from "redux";
import actionReducer from "./actionReducer";
import filtersReducer from "./filtersReducer";

export default combineReducers({
  actionReducer,
  filtersReducer
});
