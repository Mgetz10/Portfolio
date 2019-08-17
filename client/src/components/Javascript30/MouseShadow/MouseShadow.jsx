import React, { Component } from 'react';
import './style.css';

class HoldShift extends Component {
  componentDidMount() {
    const hero = document.querySelector('.hero');
    const text = hero.querySelector('h1');
    const walk = 100;

    function shadow(e) {
      const { offsetWidth: width, offsetHeight: height } = hero;
      let { offsetX: x, offsetY: y } = e;

      if (this !== e.target) {
        console.dir(this);
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }

      const xWalk = Math.round((x / width) * walk - walk / 2);
      const yWalk = Math.round((y / height) * walk - walk / 2);
      // console.log(xWalk, yWalk);
      text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7), 
      ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)`;
    }

    hero.addEventListener('mousemove', shadow);
  }

  render() {
    return (
      <div className="MouseShadow">
        <div className="hero">
          <h1 contentEditable>🔥WOAH!</h1>
        </div>
      </div>
    );
  }
}

export default HoldShift;
