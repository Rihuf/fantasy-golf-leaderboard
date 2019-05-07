import React, { Component } from "react";
import TeamCard from "./TeamCard";

export class PlayerCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="player-container">
          <div className="favorite">c</div>
          <div className="position">1</div>
          <div className="name">R. Fesperman</div>
          <div className="score">-37</div>
        </div>
        <TeamCard />
      </React.Fragment>
    );
  }
}

export default PlayerCard;
