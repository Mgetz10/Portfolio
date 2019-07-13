import React, { Component } from 'react';
import Drumkit from '../Javascript30/Drumkit/Drumkit.jsx';
import Clock from '../Javascript30/Clock/Clock.jsx';
import CssVariables from '../Javascript30/CssVariables/CssVariables.jsx';

class Practice extends Component {
  state = {
    drumkitHidden: true,
    clockHidden: true,
    cssVariableHidden: true
  };
  toggleDrumkit = () => {
    this.setState({
      drumkitHidden: !this.state.drumkitHidden
    });
  };
  toggleClock = () => {
    this.setState({
      clockHidden: !this.state.clockHidden
    });
  };

  toggleCssVariable = () => {
    this.setState({
      cssVariableHidden: !this.state.cssVariableHidden
    });
  };
  render() {
    return (
      <div className="Practice">
        <button onClick={this.toggleDrumkit}>
          {!this.state.drumkitHidden ? 'Hide Drumkit' : 'Show Drumkit'}
        </button>
        {!this.state.drumkitHidden && <Drumkit />}

        <button onClick={this.toggleClock}>
          {!this.state.clockHidden ? 'Hide Clock' : 'Show Clock'}
        </button>
        {!this.state.clockHidden && <Clock />}

        <button onClick={this.toggleCssVariable}>
          {!this.state.cssVariableHidden
            ? 'Hide CssVariables'
            : 'Show CssVariables'}
        </button>
        {!this.state.cssVariableHidden && <CssVariables />}

        {/* <CssVariables /> */}
      </div>
    );
  }
}

export default Practice;
