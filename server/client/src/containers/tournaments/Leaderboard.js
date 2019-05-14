import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPlayers } from "../../actions/players";
import PlayerCard from "./PlayerCard";

export class Leaderboard extends Component {
  //on page load, go get the players
  componentDidMount() {
    this.props.getPlayers();
  }

  renderLeaderboard() {
    if (this.props.players.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { players, tournament } = this.props;

      //sum the player's scoresByRound for this tournament
      players.forEach(player => {
        if (player.scoresByRound[tournament].length > 0) {
          let sum = player.scoresByRound[tournament].reduce(
            (accumulator, currentValue) => accumulator + currentValue
          );
          player.scoreTotals[tournament] = sum;
        }
      });

      //sort the players according to their scoresByRound for this tournament

      players.sort(
        (a, b) => a.scoreTotals[tournament] - b.scoreTotals[tournament]
      );
      console.log("are the players sorted? ", players);

      return players.map((p, index) => {
        return (
          <PlayerCard
            player={p}
            tournament={tournament}
            key={p.playerId}
            position={index + 1}
          />
        );
      });
    }
  }

  render() {
    return <React.Fragment>{this.renderLeaderboard()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return { players: state.players };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPlayers }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
