import { Filters } from "./../actions";

const filters = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    case "SHOW_ACTIVE":
      return action.filter;
    case "SHOW_COMPLITED":
      return action.filter;
    default:
      return state;
  }
};

export default filters;
