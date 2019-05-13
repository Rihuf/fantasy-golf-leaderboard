import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import MastersImage from "../assets/images/masters-logo.png";
import PGAImage from "../assets/images/pga-logo.png";
import OpenImage from "../assets/images/open-logo.png";
import USOpenImage from "../assets/images/us-open-logo.png";
import Tournament from "./tournaments/Tournament";
import Rules from "../components/Rules/Rules";
import About from "../components/About/About";

export default class App extends Component {
  state = {
    showMenu: false,
    showTournaments: false
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
          <Route exact path="/home" render={() => <Home />} />
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
