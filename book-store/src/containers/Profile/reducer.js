import { CHANGE_TAB } from "./actions";

const inititalState = {
  tab: 1,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        tab: action.tab,
      };

    default:
      return state;
  }
};

export default reducer;
