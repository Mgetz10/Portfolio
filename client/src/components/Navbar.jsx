import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../api';

class Navbar extends Component {
  handleLogoutClick(e) {
    api.logout();
    this.setUser();
  }

  render() {
    return (
      <header className="App-header">
        <div className="nav-bar flex">
          <div className="user">Hello</div>
          <Link to="/" exact>
            Home
          </Link>
          <NavLink to="/secret">Secret</NavLink>
        </div>
        <div className="flex">
          <h1 className="App-title">Monroe</h1>
        </div>
      </header>
    );
  }
}

export default Navbar;
