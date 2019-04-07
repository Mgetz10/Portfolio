import React, { Component } from 'react';
import api from '../../api';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  render() {
    if (!api.isLoggedIn()) return <Redirect to="/login" />;
    return (
      <div className="Home">
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
