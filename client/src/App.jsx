import React, { Component } from 'react';
import api from './api';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

export default class App extends Component {
  state = {
    user: {}
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}
