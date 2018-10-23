let id = 0;

export const addItem = text => ({
  type: "ADD_ITEM",
  id: id++,
  text
});

export const toggleItem = id => ({
  type: "TOGGLE_ITEM",
  id: id++
});

export const deleteItem = id => ({
  type: "DELETE_ITEM",
  id: id
});

/*
export const deleteAll = ([]) => ({
  type: "DELETE_ALL"
});
*/

export const Filters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLITED: "SHOW_COMPLITED"
};
