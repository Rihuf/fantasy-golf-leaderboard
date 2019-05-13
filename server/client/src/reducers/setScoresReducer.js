import { SET_SCORES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case SET_SCORES:
      const myTotal = action.payload;
      // console.log("myTotal ----- single player score from TeamCard: ", myTotal);
      // console.log([...state]);
      // const newState = state.map(index => {
      //   if(index.id == myTotal.id){

      //   } else return
      // })
      return [...state, myTotal];
    default:
      return state;
  }
}
