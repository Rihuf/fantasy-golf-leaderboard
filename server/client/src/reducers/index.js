import { combineReducers } from "redux";
import playersReducer from "./playersReducer";
import assetsReducer from "./assetsReducer";

export default combineReducers({
  players: playersReducer,
  assets: assetsReducer
});
