import { v4 } from "node-uuid";

export const addTodo = () => {
  return {
    type: "ADD_TODO"
  };
};

export const inputChange = text => {
  return {
    type: "INPUT_CHANGE",
    text
  };
};

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

export const VisibilityFilters = {
  SHOW_ALL: "all_tasks",
  SHOW_COMPLETED: "completed_tasks",
  SHOW_ACTIVE: "active_tasks"
};

export const getState = data => ({
  type: "GET_STATE",
  data
});

export const returnState = dispatch => {
  fetch("/api/items")
    .then(response => response.json())
    .then(data => {
      dispatch(getState(data.items));
    })
    .catch(alert);
};

export const addToState = (data, dispatch) => {
  let id = v4();
  let obj = {
    id,
    text: data,
    completed: false
  };
  fetch("/api/items", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify(obj)
  })
    .then(function(response) {
      dispatch(addTodo());
      return response;
    })
    .then(function(data) {
      returnState(dispatch);
      console.log(data);
    });
};
