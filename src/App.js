import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';

import LoginForm from './components/forms/login';
import MainMenu from './components/page/main';
import * as notificationActions from './components/notification/actions';

class App extends Component {
  render() {
    let { notifications } = this.props;
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
            <Route path='/login'>
              <LoginForm />
            </Route>
            <PrivateRoute path='/' >
              <MainMenu />
            </PrivateRoute>
          </Switch>
        </Router>
      </div >
    )
  }
}

function PrivateRoute({ children, ...rest }) {
  let apiKey = localStorage.getItem('apiKey');
  if (apiKey && apiKey.length === 59) {
    return (
      <Route {...rest} render={() => {
        return children
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
    notifications: state.addNotificationReducer.get('notifications')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeNotification: notificationId => dispatch(notificationActions.removeNotification(notificationId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);