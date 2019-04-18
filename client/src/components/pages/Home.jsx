import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Projects</h2>
        <div className="flex column">
          <iframe src="https://foodini-fridge.herokuapp.com" />
          <iframe src="https://footsie.herokuapp.com" />
          <iframe src="https://mgetz10.github.io/Music-Game" />
        </div>
      </div>
    );
  }
}

export default Home;
