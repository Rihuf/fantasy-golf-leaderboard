import React, { Component } from "react";
import GolferCard from "./GolferCard";

export class TeamCard extends Component {
  render() {
    return (
      <React.Fragment>
        <GolferCard />
        <GolferCard />
        <GolferCard />
        <GolferCard />
        <GolferCard />
        <GolferCard />
      </React.Fragment>
    );
  }
}

export default TeamCard;
