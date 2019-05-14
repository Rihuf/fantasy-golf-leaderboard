import MastersImage from "../assets/images/masters-logo.png";
import PGAImage from "../assets/images/pga-logo.png";
import OpenImage from "../assets/images/open-logo.png";
import USOpenImage from "../assets/images/us-open-logo.png";

const initialState = [
  {
    tournament: "masters",
    color: "#039b77",
    src: MastersImage,
    dateStart: "April 11, 2019",
    dateEnd: "April 14, 2019"
  },
  {
    tournament: "pga",
    color: "#233354",
    src: PGAImage,
    dateStart: "May 16, 2019",
    dateEnd: "May 19, 2019"
  },
  {
    tournament: "usopen",
    color: "#003865",
    src: USOpenImage,
    dateStart: "June 13, 2019",
    dateEnd: "June 16, 2019"
  },
  {
    tournament: "open",
    color: "#191b3c",
    src: OpenImage,
    dateStart: "July 18, 2019",
    dateEnd: "July 21, 2019"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
