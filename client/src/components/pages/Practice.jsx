import React, { Component } from "react";
import Drumkit from "../Javascript30/Drumkit/Drumkit.jsx";
import Clock from "../Javascript30/Clock/Clock.jsx";
import CssVariables from "../Javascript30/CssVariables/CssVariables.jsx";
import FlexPanels from "../Javascript30/FlexPanels/FlexPanels.jsx";

class Practice extends Component {
  state = {
    drumkitHidden: true,
    clockHidden: true,
    cssVariableHidden: true,
    flexPanelsHidden: true
  };
  toggleHide = e => {
    let bool = e.target.dataset.hidden === "true";
    this.setState({
      [`${e.target.dataset.name}Hidden`]: !bool
    });
  };
  render() {
    return (
      <div className="Practice">
        <button
          data-name="drumkit"
          data-hidden={this.state.drumkitHidden}
          onClick={this.toggleHide}
        >
          {!this.state.drumkitHidden ? "Hide Drumkit" : "Show Drumkit"}
        </button>
        {!this.state.drumkitHidden && <Drumkit />}

        <button
          data-name="clock"
          data-hidden={this.state.clockHidden}
          onClick={this.toggleHide}
        >
          {!this.state.clockHidden ? "Hide Clock" : "Show Clock"}
        </button>
        {!this.state.clockHidden && <Clock />}

        <button
          data-name="cssVariable"
          data-hidden={this.state.cssVariableHidden}
          onClick={this.toggleHide}
        >
          {!this.state.cssVariableHidden
            ? "Hide CssVariables"
            : "Show CssVariables"}
        </button>
        {!this.state.cssVariableHidden && <CssVariables />}

        <button
          data-name="flexPanels"
          data-hidden={this.state.flexPanelsHidden}
          onClick={this.toggleHide}
        >
          {!this.state.flexPanelsHidden ? "Hide FlexPanels" : "Show FlexPanels"}
        </button>
        {!this.state.flexPanelsHidden && <FlexPanels />}
      </div>
    );
  }
}

export default Practice;
