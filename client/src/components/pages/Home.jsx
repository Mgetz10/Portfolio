import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Projects</h2>
        <div className="flex column">
          <iframe title="foodini" src="https://foodini-fridge.herokuapp.com" />
          <iframe title="footsie" src="https://footsie.herokuapp.com" />
          <iframe title="stem" src="https://mgetz10.github.io/Music-Game" />
        </div>
      </div>
    );
  }
}

export default Home;
