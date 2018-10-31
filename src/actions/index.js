import { v4 } from "node-uuid";

export const updateTask = completed => ({
  type: "UPDATE_TASK",
  completed
});

export const deleteTasks = () => ({
  type: "DELETE_TASKS"
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


export const toggleTask = (completed, id, dispatch) => {

  let task = {
    completed: !completed,
    id: id
  };
  console.log(task);
  fetch("/api/items", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "put",
    body: JSON.stringify(task)
  })
    .then(function(response) {
      return response;
    })
    .then(function() {
      getTasks()(dispatch);
    });
};


/*
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})*/