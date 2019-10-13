import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import './App.css';

import * as contactAction from './actions/contactAction';
import Example from './components/example';

import LoginForm from './components/forms/login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      apiKey: ''
    }
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/example">Example</Link>
            </li>
          </ul>
          <Switch>
{/* 
            <PrivateRoute path="/">
              <LoginForm />
            </PrivateRoute>
 */}
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/example">
              <Example />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

function PrivateRoute(/* { children, ...rest } */) {
  return (
    <div></div>
/*     
    <Route
      {...rest}
      render={({ location }) =>
        this.state.apiKey ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
 */    
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: contact => dispatch(contactAction.deleteContact(contact))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);