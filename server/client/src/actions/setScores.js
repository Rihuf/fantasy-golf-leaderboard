import { SET_SCORES } from "./index";

/**********************************
    SET ALL PLAYER TOTAL SCORES
***********************************/
export const setScores = (total, id) => {
  const scoreObj = { id, total };

  return {
    type: SET_SCORES,
    payload: scoreObj
  };
};
