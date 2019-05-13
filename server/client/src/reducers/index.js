import { combineReducers } from "redux";
import playersReducer from "./playersReducer";
import assetsReducer from "./assetsReducer";
import setScoresReducer from "./setScoresReducer";

export default combineReducers({
  players: playersReducer,
  assets: assetsReducer,
  scores: setScoresReducer
});
