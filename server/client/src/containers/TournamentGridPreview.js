import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPlayers } from "../actions/players";
import GridPreviewPlayer from "./GridPreviewPlayer";

export class TournamentGridPreview extends Component {
  //on page load, go get the players
  componentDidMount() {
    this.props.getPlayers();
  }

  renderLeaderboardPreview() {
    if (this.props.players.length === 0) {
      return null;
    } else {
      const { players } = this.props;
      const { tournament } = this.props.tournament;
      console.log(tournament);

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
      console.log(players);

      return players.map((p, index) => {
        if (index < 6) {
          return (
            <GridPreviewPlayer
              player={p}
              tournament={tournament}
              position={index + 1}
            />
          );
        }
      });
    }
  }

  // renderLeaderboard() {
  //   if (this.props.players.length === 0) {
  //     return <div>Loading...</div>;
  //   } else {
  //     const { tournament } = this.props.tournament;
  //     const { players } = this.props;
  //     console.log("tourrrrrrrrnament", tournament);
  //     return players.map(index => {
  //       return <GridPreviewPlayer player={index} tournament={tournament} />;
  //     });
  //   }
  // }

  render() {
    // const { leaderboard } = this.props.tournament;
    return (
      <React.Fragment>
        <div className="home-page-tournament-leaderboard">
          <div className="grid">{this.renderLeaderboardPreview()}</div>
        </div>
      </React.Fragment>
    );
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
)(TournamentGridPreview);
