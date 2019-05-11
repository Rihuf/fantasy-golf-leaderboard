import { GET_PLAYERS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case GET_PLAYERS:
      // return console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
