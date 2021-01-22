import { PREV_STEP, NEXT_STEP, RESET_STEP } from "./actions";

const inititalState = {
  step: 1,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case PREV_STEP:
      return {
        ...state,
        step: state.step - 1,
      };
    case RESET_STEP:
      return {
        ...state,
        step: 1,
      };
    default:
      return state;
  }
};

export default reducer;
