import { ADD_TODO,REMOVE_TODO,CLEAN_TODO } from "../Action/todo";

const initialState = {
  TodoValues: [],
};

export default (state = initialState, action) => {
  switch ((action.type)) {
    case ADD_TODO:
      return {
        ...state,
        TodoValues: [...state.TodoValues,action.payload],
      };
      case REMOVE_TODO:
        return {
          ...state,
          TodoValues: state.TodoValues.filter(todo => todo !=action.payload),
        };
        case CLEAN_TODO:
          return {
            ...state,
            TodoValues: [],
          };
    default:
      return state;
  }
};
