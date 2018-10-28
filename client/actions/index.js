import { v4 } from "node-uuid";

export const addItem = text => ({
  type: "ADD_ITEM",
  id: v4(),
  text
});

export const toggleItem = id => ({
  type: "TOGGLE_ITEM",
  id
});

export const deleteAll = () => ({
  type: "DELETE_ALL"
});

export const receiveItems = (filter, response) => ({
  type: "RECEIVE_ITEMS",
  filter,
  response
});

export const VisibilityFilters = {
  SHOW_ALL: "all_tasks",
  SHOW_COMPLETED: "complited_tasks",
  SHOW_ACTIVE: "active_tasks"
};
