import React, { Component } from "react";
import "./style.css";

class FlexPanels extends Component {
  componentDidMount() {
    const panels = document.querySelectorAll(".panel");
    function toggleOpen() {
      this.classList.toggle("open");
    }
    function toggleOpenActive(e) {
      if (e.propertyName.includes("flex")) {
        console.log("💩");
        this.classList.toggle("open-active");
      }
    }

    panels.forEach(panel => panel.addEventListener("click", toggleOpen));
    panels.forEach(panel =>
      panel.addEventListener("transitionend", toggleOpenActive)
    );
  }
  render() {
    return (
      <div className="flexPanelsContainer">
        <div className="panels">
          <div className="panel panel1">
            <p>Hey</p>
            <p>Let's</p>
            <p>Dance</p>
          </div>
          <div className="panel panel2">
            <p>Give</p>
            <p>Take</p>
            <p>Receive</p>
          </div>
          <div className="panel panel3">
            <p>Experience</p>
            <p>It</p>
            <p>Today</p>
          </div>
          <div className="panel panel4">
            <p>Give</p>
            <p>All</p>
            <p>You can</p>
          </div>
          <div className="panel panel5">
            <p>Life</p>
            <p>In</p>
            <p>Motion</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FlexPanels;
