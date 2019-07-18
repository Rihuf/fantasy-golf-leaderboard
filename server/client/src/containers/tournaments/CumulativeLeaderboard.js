import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPlayers } from "../../actions/players";
import CumulativeLeaderboardPlayer from "./CumulativeLeaderboardPlayer";

export class CumulativeLeaderboard extends Component {
  //on page load, go get the players
  componentDidMount() {
    this.props.getPlayers();
    setInterval(this.props.getPlayers, 30000);
  }

  renderLeaderboard() {
    if (this.props.players.length === 0) {
      return null;
    } else {
      const { players } = this.props;
      //sum the player's scoresByRounad for this tournament
      players.forEach(player => {
        player.cumulative =
          parseInt(player.scoreTotals.masters) +
          parseInt(player.scoreTotals.pga) +
          parseInt(player.scoreTotals.usopen) +
          parseInt(player.scoreTotals.open);
      });
      //sort the players according to their scoresByRound for this tournament

      players.sort((a, b) => a.cumulative - b.cumulative);

      console.log(players);

      return players.map((p, index) => {
        return (
          <div className="player-container">
            <div className="position">{index + 1}</div>
            <div className="name">
              {p.firstName.charAt(0)}. {p.lastName}
            </div>
            <div className="score">{p.cumulative}</div>
          </div>
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
)(CumulativeLeaderboard);
