let itemId = 0;

export const addItem = text => ({
  type: "ADD_ITEM",
  id: itemId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleItem = id => ({
  type: "TOGGLE_ITEM",
  id
});

export const deleteItem = id => ({
  type: "DELETE_ITEM",
  id
});

export const deleteAll = () => ({
  type: "DELETE_ALL"
});
/*
export const openItem = id => ({
  type: "OPEN_ITEM",
  id
});
*/

export const deletePost = () => ({
  type: "DELETE_ALL"
});
export const hideModal = () => ({
  type: "DELETE_ALL"
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
