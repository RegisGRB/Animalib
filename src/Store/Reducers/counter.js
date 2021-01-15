import { INCREMENT_COUNTER,DECREMENT_COUNTER,SETVALUE } from "../Action/counter";

const initialState = {
  counterValue: 0,
};

export default (state = initialState, action) => {
  switch ((action.type)) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counterValue: state.counterValue + 1,
      };
      case DECREMENT_COUNTER:
        return {
          ...state,
          counterValue: state.counterValue - 1,
        };
        case SETVALUE:
          return {
            ...state,
            counterValue: action.payload,
          };
    default:
      return state;
  }
};
