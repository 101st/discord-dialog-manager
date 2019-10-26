import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as loginFormActions from '../../forms/login/actions';
import { Grid } from 'semantic-ui-react';

import MainMenu from '../../menu/main';
import GuildTable from '../../guildTable';
import ChannelTable from '../../channelTable';
import CommentsGroup from '../../commentsGroup';

class MainPage extends Component {

  componentDidMount() {
    let apiKey = localStorage.getItem('apiKey');
    this.props.getCurrentUserGuilds(apiKey);
    this.props.getChannels(apiKey);
    this.props.setApiKey(apiKey);
    this.props.getMe(apiKey);
  }

  render() {
    return (
      <div>
        <MainMenu />
        <Grid>
          <Grid.Row style={{ margin: '5px' }}>
            <Grid.Column style={{
              marginTop: '5px',
              width: '300px',
              borderRight: '1px solid rgba(34,36,38,.1)'
            }}>
              <GuildTable {...this.props} />
              <ChannelTable {...this.props} />
            </Grid.Column>
            <Grid.Column style={{
              marginTop: '5px',
              width: 'auto'
            }}>
              <CommentsGroup {...this.props} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apiKey: state.formsLoginReducer.get('apiKey'),
    guilds: state.mainPageReducer.get('guilds'),
    channels: state.mainPageReducer.get('channels'),
    messages: state.mainPageReducer.get('messages'),
    me: state.mainPageReducer.get('me'),
    user: state.mainPageReducer.get('user')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setApiKey: apiKey => dispatch(loginFormActions.setApiKey(apiKey)),
    getCurrentUserGuilds: apiKey => dispatch(actions.getCurrentUserGuilds(apiKey)),
    getChannels: apiKey => dispatch(actions.getChannels(apiKey)),
    searchGuildText: (apiKey, guildId, params) => dispatch(actions.searchGuildText(apiKey, guildId, params)),
    getUser: (apiKey, userId) => dispatch(actions.getUser(apiKey, userId)),
    getMe: apiKey => dispatch(actions.getMe(apiKey))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);