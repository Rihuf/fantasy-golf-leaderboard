import React, { Component } from "react";
import GolferCard from "./GolferCard";
import TeamSums from "./TeamSums";

export class TeamCard extends Component {
  renderGolferCard() {
    if (this.props.team.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { team, tournament } = this.props;
      return team.map(index => {
        if (index.tournaments[tournament])
          return <GolferCard golfer={index} tournament={tournament} />;
      });
    }
  }

  render() {
    console.log("from TeamCard: ", this.props);
    const { team, tournament, isActive } = this.props;
    return (
      <div className={isActive ? "team-container show" : "team-container"}>
        <div className="team-header-container">
          <div className="name">Golfers</div>
          <div className="round1">R1</div>
          <div className="round2">R2</div>
          <div className="round3">R3</div>
          <div className="round4">R4</div>
          <div className="hole">H</div>
        </div>
        {this.renderGolferCard()}
        <TeamSums />
      </div>
    );
  }
}

export default TeamCard;
