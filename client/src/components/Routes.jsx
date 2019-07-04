import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Practice from './pages/Practice';

//fixed
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              user={this.props.user}
              setUser={this.props.setUser}
            />
          )}
        />
        <Route
          exact
          path="/practice"
          render={props => (
            <Practice
              {...props}
              user={this.props.user}
              setUser={this.props.setUser}
            />
          )}
        />
        {/* <Route exact path="/practice" render={Practice} /> */}
        <Route render={() => <h2>404</h2>} />
      </Switch>
    );
  }
}

export default Routes;
