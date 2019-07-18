import React, { Component } from "react";
import CumulativeGridPreview from "./CumulativeGridPreview";

export class CumulativeBlock extends Component {
  render() {
    return (
      <div
        className="home-page-tournament-container"
        style={{
          background: "#1e1e1e",
          borderBottom: "2px solid #e9cab4"
        }}
      >
        <div
          className="home-page-tournament-branding"
          style={{
            fontWeight: "500"
          }}
        >
          Cumulative
        </div>
        <CumulativeGridPreview />
      </div>
    );
  }
}

export default CumulativeBlock;
