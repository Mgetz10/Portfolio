import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

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
        <Route render={() => <h2>404</h2>} />
      </Switch>
    );
  }
}

export default Routes;
