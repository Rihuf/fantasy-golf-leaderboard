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

  componentDidUpdate() {
    console.log("FROM LEADERBOARD: ", this.props);
  }

  renderLeaderboard() {
    if (this.props.players.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { players, tournament, scores } = this.props;
      console.log("params", scores);
      console.log("tournament: ", tournament);
      console.log("players", players);
      return players.map(index => {
        return (
          <PlayerCard
            player={index}
            tournament={tournament}
            key={index.playerId}
            // position={xxxxx}
            // score={yyyyyy}
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
  return { players: state.players, scores: state.scores };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPlayers }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
