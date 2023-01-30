export const updateTask = (completed) => ({
  type: 'UPDATE_TASK',
  completed,
});

export const deleteTasks = () => ({
  type: 'DELETE_TASKS',
});

export const getTask = (id) => ({
  type: 'GET_TASK',
  id,
});

export const getTasks = () => (dispatch) => {
  fetch('/api/items')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: 'GET_TASKS',
        items: data.items,
      });
    });
};

export const putTask = (data, dispatch) => {
  console.log(data)
  let task = {
    text: data,
    completed: false,
  };
  fetch('/api/items', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(task),
  })
    .then((response) => response)
    .then(() => getTasks()(dispatch));
};

export const removeTasks = (dispatch) => {
  fetch('/api/items', {
    method: 'delete',
  })
    .then((response) => response)
    .then(() => getTasks()(dispatch));
};

export const toggleTask = (completed, id, dispatch) => {
  let task = {
    completed: !completed,
    id: id,
  };
  fetch('/api/items', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'put',
    body: JSON.stringify(task),
  })
    .then((response) => response)
    .then(() => getTasks()(dispatch));
};
