import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from './actions';

class MainMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='https://react.semantic-ui.com/logo.png' alt='logo' />
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    apiKey: state.formsLoginReducer.get('apiKey')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteApiKey: () => dispatch(actions.deleteApiKey())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);