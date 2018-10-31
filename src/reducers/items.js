const items = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TASK":
      return state.map(
        item =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
      );

    /*
    case "TOGGLE_TASK":
      return Object.assign({}, state, {
        items: state.items.map((item, id) => {
          if (id === action.id) {
            return Object.assign({}, item, {
              completed: !item.completed
            });
          }
          return item;
        })
      });
    */

    case "DELETE_TASKS":
      return [];
    case "GET_TASKS":
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export default items;

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all_tasks":
      return state;
    case "completed_tasks":
      return state.filter(t => t.completed);
    case "active_tasks":
      return state.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: + ${filter}`);
  }
};
