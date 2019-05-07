import React, { Component } from "react";
import PlayerCard from "./PlayerCard";

export class Leaderboard extends Component {
  renderPlayers = () => {
    let array = [];
    for (let i = 0; i < 40; i++) {
      array.push(<PlayerCard />);
    }
    return array;
  };
  render() {
    return (
      <React.Fragment>
        {this.renderPlayers().map(index => {
          return index;
        })}
      </React.Fragment>
    );
  }
}

export default Leaderboard;
