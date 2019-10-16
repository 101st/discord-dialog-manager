import React, { Component } from 'react'
import { Menu, Icon, Popup } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../../forms/login/actions';

import Stats from '../../page/stats';

class MainMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    switch (name) {
      case 'signout':
        this.props.deleteApiKey();
        window.location.reload();
        break;
      default:
        break;
    }
  }

  render() {
    const { activeItem } = this.state
    let { apiKey, guildsCount, channelsCount } = this.props;

    return (
      <Menu style={{ margin: '0px' }}>
        <Menu.Menu position='left'>
          <Stats guildsCount={guildsCount} channelsCount={channelsCount} />
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
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
    apiKey: state.formsLoginReducer.get('apiKey'),
    guildsCount: state.mainPageReducer.get('guildsCount'),
    channelsCount: state.mainPageReducer.get('channelsCount')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteApiKey: () => dispatch(actions.deleteApiKey())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);