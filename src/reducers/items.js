const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'DELETE_TASKS':
      return [];
    case 'GET_TASKS':
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export default items;
