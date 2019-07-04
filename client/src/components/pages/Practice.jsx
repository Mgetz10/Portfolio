import React, { Component } from 'react';
class Practice extends Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.src = '';
    script.async = true;

    document.body.appendChild(script);
  }
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

export default Practice;
