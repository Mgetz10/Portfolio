import React, { Component } from 'react';
import Drumkit from '../Javascript30/Drumkit/Drumkit.jsx';
import Clock from '../Javascript30/Clock/Clock.jsx';
import CssVariables from '../Javascript30/CssVariables/CssVariables.jsx';
import FlexPanels from '../Javascript30/FlexPanels/FlexPanels.jsx';
import DrawCanvas from '../Javascript30/DrawCanvas/DrawCanvas.jsx';
import HoldShift from '../Javascript30/HoldShift/HoldShift.jsx';
import CustomVideo from '../Javascript30/CustomVideo/CustomVideo.jsx';
import '../Javascript30/KonamiCode/KonamiCode.jsx';
import MouseShadow from '../Javascript30/MouseShadow/MouseShadow.jsx';

class Practice extends Component {
  state = {
    DrumkitHidden: true,
    ClockHidden: true,
    CssVariablesHidden: true,
    FlexPanelsHidden: true,
    DrawCanvasHidden: true,
    HoldShiftHidden: true,
    CustomVideoHidden: true
  };
  toggleHide = e => {
    let bool = e.target.dataset.hidden === 'true';
    this.setState({
      [`${e.target.dataset.name}Hidden`]: !bool
    });
  };

  componentArray = [
    { name: 'Drumkit', component: Drumkit },
    { name: 'Clock', component: Clock },
    { name: 'CssVariables', component: CssVariables },
    { name: 'FlexPanels', component: FlexPanels },
    { name: 'DrawCanvas', component: DrawCanvas },
    { name: 'HoldShift', component: HoldShift },
    { name: 'CustomVideo', component: CustomVideo },
    { name: 'MouseShadow', component: MouseShadow }
  ];

  render() {
    return (
      <div className="Practice">
        {this.componentArray.map((component, index) => {
          return (
            <button
              key={index}
              data-name={component.name}
              data-hidden={this.state[`${component.name}Hidden`]}
              onClick={this.toggleHide}
            >
              {!this.state[`${component.name}Hidden`]
                ? `Hide ${component.name}`
                : `Show ${component.name}`}
            </button>
          );
        })}
        {this.componentArray.map((component, index) => {
          return (
            <div key={index}>
              {!this.state[`${component.name}Hidden`] && (
                <component.component />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Practice;
