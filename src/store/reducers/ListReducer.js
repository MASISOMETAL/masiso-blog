const initialState = [];

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
        },
      ];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default ListReducer;