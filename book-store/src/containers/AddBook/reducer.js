import {
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from "./actions";

const inititalState = {
  isSending: false,
  categories: [],
  isLoadingCategories: false,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return {
        ...state,
        isSending: true,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        isSending: false,
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        isSending: false,
      };
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        isLoadingCategories: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoadingCategories: false,
        categories: action.data,
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoadingCategories: false,
      };
    default:
      return state;
  }
};

export default reducer;
