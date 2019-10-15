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
import * as actions from './components/notification/actions';

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
    })
    return (
      <div>
        <div className='notification'>
          {notifications}
        </div>
        < Router >
          <Switch>
            <Route path="/login" component={LoginForm} />
            <PrivateRoute path="/" component={MainMenu} apiKey={this.props.apiKey} />
          </Switch>
        </Router >
      </div >
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
    apiKey: state.formsLoginReducer.get('apiKey'),
    notifications: state.addNotification.get('notifications')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeNotification: notificationId => dispatch(actions.removeNotification(notificationId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);