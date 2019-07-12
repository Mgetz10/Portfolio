import React, { Component } from 'react';
import Drumkit from '../Javascript30/Drumkit/Drumkit.jsx';
class Practice extends Component {
  state = {
    isHidden: true
  };
  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  render() {
    return (
      <div className="Practice">
        <button onClick={this.toggleHidden}>
          {!this.state.isHidden ? 'Hide Drumkit' : 'Show Drumkit'}
        </button>
        {!this.state.isHidden && <Drumkit />}
      </div>
    );
  }
}

export default Practice;
