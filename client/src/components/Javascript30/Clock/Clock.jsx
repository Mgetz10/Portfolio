import React, { Component } from 'react';
import './style.css';

class Clock extends Component {
  componentDidMount() {
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const setDate = () => {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = (hour / 12) * 360 + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;

      console.log(hour);
    };

    setInterval(setDate, 1000);
  }

  render() {
    return (
      <div className="clocktainer">
        <div className="clock">
          <div className="clock-face">
            <div id="hour-hand" className="hand hour-hand" />
            <div id="min-hand" className="hand min-hand" />
            <div id="second-hand" className="hand second-hand" />
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
