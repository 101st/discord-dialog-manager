import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

import LoginForm from './components/forms/login';
import MainMenu from './components/page/main';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/" component={MainMenu} apiKey={this.props.apiKey} />
        </Switch>
      </Router>
    )
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
      return rest.apiKey
        ? (<Component {...props} />)
        : <Redirect to='/login' />
    }} />
  );
}

const mapStateToProps = (state) => {
  return {
    apiKey: state.formsLoginReducer.get('apiKey')
  }
};

export default connect(mapStateToProps, null)(App);