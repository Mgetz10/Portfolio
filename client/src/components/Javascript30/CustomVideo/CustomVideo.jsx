import React, { Component } from "react";
import "./style.css";
import video from "./videos/video.mp4";

class CustomVideo extends Component {
  state = {
    volume: "1",
    playbackRate: "1"
  };

  mousedown = false;

  scrub = e => {
    const scrubTime =
      (e.nativeEvent.offsetX / this.refs.progressBar.offsetWidth) *
      this.refs.videoRef.duration;
    this.refs.videoRef.currentTime = scrubTime;
  };

  skip = e => {
    this.refs.videoRef.currentTime += parseFloat(e.target.dataset.skip);
  };

  handleRangeUpdate = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.refs.videoRef[e.target.name] = e.target.value;
  };

  togglePlay = () => {
    const method = this.refs.videoRef.paused ? "play" : "pause";
    this.refs.videoRef[method]();
  };

  updateButton = () => {
    const toggle = this.refs.toggle;
    const icon = this.refs.videoRef.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
  };

  handleProgress = () => {
    const percent =
      (this.refs.videoRef.currentTime / this.refs.videoRef.duration) * 100;
    this.refs.progressFilled.style.flexBasis = `${percent}%`;
  };

  render() {
    return (
      <div className="CustomVideo">
        <div className="player">
          <video
            ref="videoRef"
            className="player__video viewer"
            src={video}
            onClick={this.togglePlay}
            onPlay={this.updateButton}
            onPause={this.updateButton}
            onTimeUpdate={this.handleProgress}
          />
          <div className="player__controls">
            <div
              ref="progressBar"
              className="progress"
              onClick={this.scrub}
              onMouseMove={e => this.mousedown && this.scrub(e)}
              onMouseDown={() => (this.mousedown = true)}
              onMouseUp={() => (this.mousedown = false)}
            >
              <div ref="progressFilled" className="progress__filled" />
            </div>
            <button
              ref="toggle"
              className="player__button toggle"
              title="Toggle Play"
              onClick={this.togglePlay}
            >
              ►
            </button>
            <input
              type="range"
              name="volume"
              className="player__slider"
              min="0"
              max="1"
              step="0.05"
              onChange={this.handleRangeUpdate}
            />
            <input
              type="range"
              name="playbackRate"
              className="player__slider"
              min="0.5"
              max="2"
              step="0.1"
              onChange={this.handleRangeUpdate}
            />
            <button
              data-skip="-10"
              className="player__button"
              onClick={this.skip}
            >
              « 10s
            </button>
            <button
              data-skip="25"
              className="player__button"
              onClick={this.skip}
            >
              25s »
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomVideo;
