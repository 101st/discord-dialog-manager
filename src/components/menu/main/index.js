import React, { Component } from 'react'
import { Menu, Icon, Popup } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../../forms/login/actions';

class MainMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    switch (name) {
      case 'signout':
        this.props.deleteApiKey();
        break;
      default:
        break;
    }
  }

  render() {
    const { activeItem } = this.state
    let { apiKey } = this.props;

    return (
      <Menu style={{ margin: '0px' }}>
        <Menu.Menu position='right'>
          <Menu.Item style={{cursor: 'pointer'}}>
            <Popup content={apiKey} trigger={<Icon name='key' />} basic on='click' pinned />
          </Menu.Item>

          <Menu.Item
            name='signout'
            active={activeItem === 'signout'}
            onClick={this.handleItemClick}
          >
            Sign Out
          </Menu.Item>

          <Menu.Item
            name='help'
            active={activeItem === 'help'}
            onClick={this.handleItemClick}
          >
            Help
          </Menu.Item>
        </Menu.Menu>
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