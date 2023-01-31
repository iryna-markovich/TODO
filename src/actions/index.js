const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const deleteTask = (payload) => ({
  type: 'DELETE_TASK',
  payload,
});

export const getTasks = () => (dispatch) => {
  fetch('/api/items')
    .then((response) => response.json())
    .then((items) => dispatch({ type: 'GET_TASKS', items }));
};

export const addTask = (text) => (dispatch) => {
  const body = JSON.stringify({ text, completed: false });

  fetch('/api/items', { headers, method: 'post', body })
    .then((response) => response.json())
    .then((item) => dispatch({ type: 'ADD_TASK', item }));
};

export const removeTasks = () => (dispatch) => {
  fetch('/api/items', { headers, method: 'delete' }).then(() =>
    dispatch({ type: 'DELETE_TASKS' })
  );
};

export const toggleTask = (item) => (dispatch) => {
  const body = JSON.stringify({
    ...item,
    completed: !item.completed,
  });

  fetch('/api/items', { headers, method: 'put', body })
    .then((response) => response.json())
    .then((item) => dispatch({ type: 'TOGGLE_TASK', item }));
};
