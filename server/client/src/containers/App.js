import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePageTournaments from "./HomePageTournaments";
import Navbar from "./Navbar";
import Tournament from "./tournaments/Tournament";
import Rules from "../components/Rules/Rules";
import About from "../components/About/About";

export default class App extends Component {
  state = {
    showMenu: false,
    showTournaments: false
  };

  hamburgerClick = e => {
    if (!this.state.showMenu) {
      this.setState({ showMenu: true });
    } else {
      this.setState({ showMenu: false });
    }
  };

  tournamentsClick = e => {
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
          <Route exact path="/home" render={() => <HomePageTournaments />} />
          <Route exact path="/rules" render={() => <Rules />} />
          <Route exact path="/about" render={() => <About />} />
          <Route
            path="/:tournament"
            render={props => <Tournament {...props} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
