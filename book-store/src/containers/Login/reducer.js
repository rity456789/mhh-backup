import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
} from "./actions";

const inititalState = {
  isSending: false,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isSending: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isSending: false,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        isSending: false,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isSending: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isSending: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isSending: false,
      };
    default:
      return state;
  }
};

export default reducer;
