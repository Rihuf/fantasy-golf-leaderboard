import MastersImage from "../assets/images/masters-logo.png";
import PGAImage from "../assets/images/pga-logo.png";
import OpenImage from "../assets/images/open-logo.png";
import USOpenImage from "../assets/images/us-open-logo.png";
import { GET_ASSETS } from "../actions";

const initialState = [
  {
    tournament: "masters",
    color: "#039b77",
    src: MastersImage
  },
  {
    tournament: "pga",
    color: "#233354",
    src: PGAImage
  },
  {
    tournament: "usopen",
    color: "#003865",
    src: USOpenImage
  },
  {
    tournament: "open",
    color: "#191b3c",
    src: OpenImage
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ASSETS:
      return { ...state };
    default:
      return state;
  }
}
