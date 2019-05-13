import React, { Component } from "react";
import TeamCard from "./TeamCard";

export class PlayerCard extends Component {
  state = {
    teamViewActive: false
  };

  teamDetailedView = () => {
    this.setState({ teamViewActive: !this.state.teamViewActive });
  };

  renderTeam() {
    if (this.props.player.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { player, tournament } = this.props;
      // console.log("from PlayerCard: ", player.playerId);
      return player.teams.map(index => {
        if (index.tournamentName == tournament)
          return (
            <TeamCard
              isActive={this.state.teamViewActive}
              team={index.roster}
              tournament={tournament}
              key={player.playerId}
            />
          );
      });
    }
  }

  render() {
    // console.log(this.props.player);
    const { player, tournament } = this.props;
    return (
      <React.Fragment>
        <div className="player-container" onClick={this.teamDetailedView}>
          <div className="position">1</div>
          <div className="name">
            {player.firstName} {player.lastName}
          </div>
          <div className="score">-37</div>
        </div>
        {this.renderTeam()}
      </React.Fragment>
    );
  }
}

export default PlayerCard;
