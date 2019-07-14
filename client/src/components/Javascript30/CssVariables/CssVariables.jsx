import React, { Component } from "react";
import "./style.css";

class CssVariables extends Component {
  state = {
    spacing: "10",
    blur: "10",
    base: "#ffc600"
  };

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    const suffix = event.target.dataset.sizing || "";

    document.documentElement.style.setProperty(
      `--${event.target.name}`,
      event.target.value + suffix
    );
  };

  render() {
    return (
      <div className="cssvars">
        <h2>
          Update CSS Variables with <span className="hl">JS</span>
        </h2>

        <div className="controls">
          <label htmlFor="spacing">Spacing:</label>
          <input
            id="spacing"
            type="range"
            name="spacing"
            min="10"
            max="200"
            value={this.state.spacing}
            data-sizing="px"
            onChange={this.handleUpdate}
          />

          <label htmlFor="blur">Blur:</label>
          <input
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
            value={this.state.blur}
            data-sizing="px"
            onChange={this.handleUpdate}
          />

          <label htmlFor="base">Base Color</label>
          <input
            id="base"
            type="color"
            name="base"
            value={this.state.base}
            onChange={this.handleUpdate}
          />
        </div>

        <img
          src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
          alt="varpic"
        />
      </div>
    );
  }
}

export default CssVariables;
