import { combineReducers } from "redux";
import showMenuReducer from "./showMenuReducer";

export default combineReducers({
  showMenu: showMenuReducer
});
