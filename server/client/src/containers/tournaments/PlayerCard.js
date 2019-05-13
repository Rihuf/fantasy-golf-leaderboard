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
              player={player}
            />
          );
      });
    }
  }

  renderScores(round) {
    if (this.props.player.teams.length === 0) {
      return <div>Loading...</div>;
    } else {
      if (round == 0) {
        return "E";
      } else return round;
    }
  }

  render() {
    // console.log(this.props.player);
    const { player, position, tournament } = this.props;
    return (
      <React.Fragment>
        <div className="player-container" onClick={this.teamDetailedView}>
          <div className="position">{position}</div>
          <div className="name">
            {player.firstName} {player.lastName}
          </div>
          <div className="score">
            {this.renderScores(player.scores[tournament])}
          </div>
        </div>
        {this.renderTeam()}
      </React.Fragment>
    );
  }
}

export default PlayerCard;
