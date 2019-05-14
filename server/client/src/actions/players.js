import axios from "axios";
import { GET_PLAYERS } from "./index";

// const rootUrl = "http://localhost:8000";

/*********************
    GET ALL PLAYERS
**********************/
export const getPlayers = async quantity => {
  const response = await axios.get("/player", {
    params: {
      quantity
    }
  });

  return {
    type: GET_PLAYERS,
    payload: response
  };
};
