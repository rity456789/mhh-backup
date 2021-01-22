import { combineReducers } from "redux";

import checkOutReducer from "./containers/CheckOut/reducer";
import profileReducer from "./containers/Profile/reducer";
import loginReducer from "./containers/Login/reducer";
import addBookReducer from "./containers/AddBook/reducer";

const reducer = combineReducers({
  checkOutReducer,
  profileReducer,
  loginReducer,
  addBookReducer,
});

export default reducer;
