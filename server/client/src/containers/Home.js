import React, { Component } from "react";
import HomePageTournaments from "./HomePageTournaments";

export default class App extends Component {
  render() {
    const { appState } = this.props;
    console.log(appState);
    return (
      <div>
        <HomePageTournaments tournaments={appState} />
      </div>
    );
  }
}
