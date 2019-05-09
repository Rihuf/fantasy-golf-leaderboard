import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import Home from "./Home";
import Navbar from "./Navbar";
import MastersImage from "../assets/images/masters-logo.png";
import PGAImage from "../assets/images/pga-logo.png";
import OpenImage from "../assets/images/open-logo.png";
import USOpenImage from "../assets/images/us-open-logo.png";
import Tournament from "./tournaments/Tournament";

export default class App extends Component {
  state = {
    showMenu: false,
    showTournaments: false,
    masters: {
      tournament: "Masters",
      color: "#039b77",
      src: MastersImage,
      round: "Round 1",
      leaderboard: [
        {
          position: 1,
          name: "Woods",
          score: -10,
          thru: "18"
        },
        {
          position: 2,
          name: "Fowler",
          score: -9,
          thru: "17"
        },
        {
          position: 3,
          name: "Molinari",
          score: -7,
          thru: "18"
        },
        {
          position: 4,
          name: "Fesperman",
          score: 2,
          thru: "18"
        },
        {
          position: 5,
          name: "McIlroy",
          score: 7,
          thru: "18"
        },
        {
          position: 6,
          name: "Cink",
          score: 9,
          thru: "18"
        }
      ]
    },
    pga: {
      tournament: "PGA",
      color: "#233354",
      src: PGAImage,
      round: "Round 1",
      leaderboard: [
        {
          position: 1,
          name: "Woods",
          score: -10,
          thru: "18"
        },
        {
          position: 2,
          name: "Fowler",
          score: -9,
          thru: "17"
        },
        {
          position: 3,
          name: "Molinari",
          score: -7,
          thru: "18"
        },
        {
          position: 4,
          name: "Fesperman",
          score: 2,
          thru: "18"
        },
        {
          position: 5,
          name: "McIlroy",
          score: 7,
          thru: "18"
        },
        {
          position: 6,
          name: "Cink",
          score: 9,
          thru: "18"
        }
      ]
    },
    open: {
      tournament: "Open",
      color: "#191b3c",
      src: OpenImage,
      round: "Round 1",
      leaderboard: [
        {
          position: 1,
          name: "Woods",
          score: -10,
          thru: "18"
        },
        {
          position: 2,
          name: "Fowler",
          score: -9,
          thru: "17"
        },
        {
          position: 3,
          name: "Molinari",
          score: -7,
          thru: "18"
        },
        {
          position: 4,
          name: "Fesperman",
          score: 2,
          thru: "18"
        },
        {
          position: 5,
          name: "McIlroy",
          score: 7,
          thru: "18"
        },
        {
          position: 6,
          name: "Cink",
          score: 9,
          thru: "18"
        }
      ]
    },
    usOpen: {
      tournament: "US",
      color: "#003865",
      src: USOpenImage,
      round: "Round 1",
      leaderboard: [
        {
          position: 1,
          name: "Woods",
          score: -10,
          thru: "18"
        },
        {
          position: 2,
          name: "Fowler",
          score: -9,
          thru: "17"
        },
        {
          position: 3,
          name: "Molinari",
          score: -7,
          thru: "18"
        },
        {
          position: 4,
          name: "Fesperman",
          score: 2,
          thru: "18"
        },
        {
          position: 5,
          name: "McIlroy",
          score: 7,
          thru: "18"
        },
        {
          position: 6,
          name: "Cink",
          score: 9,
          thru: "18"
        }
      ]
    }
  };

  hamburgerClick = e => {
    console.log(this.state.showMenu);
    if (!this.state.showMenu) {
      this.setState({ showMenu: true });
    } else {
      this.setState({ showMenu: false });
    }
  };

  tournamentsClick = e => {
    console.log(this.state.showTournaments);
    if (!this.state.showTournaments) {
      this.setState({ showTournaments: true });
    } else {
      this.setState({ showTournaments: false });
    }
  };

  tournamentsMenuClose = e => {
    if (this.state.showTournaments) {
      this.setState({ showTournaments: false });
    }
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar
            showMenu={this.state.showMenu}
            showTournaments={this.state.showTournaments}
            hamburgerClick={this.hamburgerClick}
            tournamentsClick={this.tournamentsClick}
            tournamentsMenuClose={this.tournamentsMenuClose}
          />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route
              exact
              path="/home"
              render={() => <Home appState={this.state} />}
            />
            <Route
              path="/:tournament"
              render={() => <Tournament tournament={this.state.masters} />}
            />
            {/* <Route
            exact
            path="/tournament"
            render={() => <Tournament appState={this.state} />}
          /> */}
            {/* <Route exact path="/deals" render={() => <Deals />} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
