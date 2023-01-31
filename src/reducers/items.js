const items = (state = [], action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, items: action.items };
    case 'ADD_TASK':
      return { ...state, items: [...state.items, action.item] };
    case 'TOGGLE_TASK':
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== action.item.id),
          action.item,
        ],
      };
    case 'DELETE_TASKS':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default items;
