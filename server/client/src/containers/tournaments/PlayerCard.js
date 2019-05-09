import React, { Component } from "react";
import TeamCard from "./TeamCard";

export class PlayerCard extends Component {
  state = {
    teamViewActive: false
  };

  teamDetailedView = () => {
    this.setState({ teamViewActive: !this.state.teamViewActive });
  };

  render() {
    return (
      <React.Fragment>
        <div className="player-container" onClick={this.teamDetailedView}>
          <div className="favorite">c</div>
          <div className="position">1</div>
          <div className="name">R. Fesperman</div>
          <div className="score">-37</div>
        </div>
        <TeamCard isActive={this.state.teamViewActive} />
      </React.Fragment>
    );
  }
}

export default PlayerCard;
