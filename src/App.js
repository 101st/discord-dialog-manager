import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import history from './history';

import LoginForm from './components/forms/login';
import MainMenu from './components/page/main';
import * as loginFormAction from './components/forms/login/actions';
import * as notificationActions from './components/notification/actions';

class App extends Component {
  componentDidMount() {
    let apiKey = localStorage.getItem('apiKey');
    if (apiKey) {
      this.props.setApiKey(apiKey);
    }
  }

  render() {
    let { notifications, apiKey } = this.props;
    notifications = notifications.map(notification => {
      setTimeout(() => {
        this.props.removeNotification(notification.id);
      }, notification.delay);
      return (
        <div key={notification.id} className={`ui tiny ${notification.colored} message`}>
          <i className='close icon' onClick={() => { this.props.removeNotification(notification.id) }}></i>
          <div className='header'>{notification.header}</div>
          {notification.content}
        </div>
      )
    });
    return (
      <div>
        <div className='notification'>
          {notifications}
        </div>
        <Router>
          <Switch>
            <Route path='/login' {...apiKey} component={LoginForm} />
            {console.log(apiKey)}
            <PrivateRoute path='/' {...apiKey} component={MainMenu} />
          </Switch>
        </Router>
      </div >
    )
  }
}

function PrivateRoute({ component: Component, ...rest }) {
  let { apiKey } = rest;
  if (apiKey && apiKey.length === 59) {
    return (
      <Route {...rest} render={props => {
        return <Component {...props} />
      }} />
    )
  }
  return (<Redirect to={{
    pathname: '/login',
    state: { from: rest.location }
  }} />);
}

const mapStateToProps = (state) => {
  return {
    apiKey: state.formsLoginReducer.get('apiKey'),
    notifications: state.addNotification.get('notifications')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setApiKey: apiKey => dispatch(loginFormAction.setApiKey(apiKey)),
    removeNotification: notificationId => dispatch(notificationActions.removeNotification(notificationId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);