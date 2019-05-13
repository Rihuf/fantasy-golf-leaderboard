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
      console.log(players);

      //sum the player's scores for this tournament
      players.forEach(player => {
        let sum = player.scores[tournament].reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
        player.scores[tournament] = sum;
      });

      //sort the players according to their scores for this tournament

      players.sort((a, b) => a.scores[tournament] - b.scores[tournament]);
      console.log(players);

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
