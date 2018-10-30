import { v4 } from "node-uuid";
/*
export const addTask = text => ({
  type: "ADD_TASK",
  id: v4(),
  text
});
*/
export const toggleTask = id => ({
  type: "TOGGLE_TASK",
  id
});

export const deleteTasks = () => ({
  type: "DELETE_TASKS"
});

export const deleteTask = id => ({
  type: "DELETE_TASK",
  id
});

export const getTask = id => ({
  type: "GET_TASK",
  id
});

export const getTasks = () => dispatch => {
  fetch("/api/items")
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: "GET_TASKS",
        items: data.items
      });
    });
};

export const putTask = (data, dispatch) => {
  let task = {
    id: v4(),
    text: data,
    completed: false
  };
  fetch("/api/items", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify(task)
  })
    .then(function(response) {
      return response;
    })
    .then(function() {
      getTasks()(dispatch);
    });
};

export const removeTasks = (dispatch) => {
  fetch("/api/items", {
    method: "delete"
  })
    .then(function(response) {
      return response;
    })
    .then(function() {
      getTasks()(dispatch);
    });
};

export const VisibilityFilters = {
  SHOW_ALL: "all_tasks",
  SHOW_COMPLETED: "completed_tasks",
  SHOW_ACTIVE: "active_tasks"
};
