import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as loginFormActions from '../../forms/login/actions';
import { Grid, Table, Header, Image } from 'semantic-ui-react';

import MainMenu from '../../menu/main';

class MainPage extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount() {
    let apiKey = localStorage.getItem('apiKey');
    this.props.getCurrentUserGuilds(apiKey);
    this.props.getChannels(apiKey);
    this.props.setApiKey(apiKey);
  }

  render() {
    let { guilds, channels } = this.props;
    guilds = guilds.map(guild => {
      return (
        <Table.Row key={guild.id}>
          <Table.Cell>
            <Header as='h4' image>
              {guild.icon ?
                <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`} rounded size='mini' /> :
                <Image src={`https://cdn.discordapp.com/avatars/159985870458322944/b50adff099924dd5e6b72d13f77eb9d7.png?size=128`} rounded size='mini' />
              }
              <Header.Content>
                {guild.name}
                <Header.Subheader style={{ fontSize: '10px', color: 'grey' }}>{`Id: ${guild.id}`}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
      )
    });
    channels = channels.map(channel => {
      let { username, discriminator, id, avatar } = channel.recipients[0];
      return (
        <Table.Row key={channel.id}>
          <Table.Cell>
            <Header as='h4' image>
              {avatar ?
                <Image src={`https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=128`} rounded size='mini' /> :
                <Image src={`https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png`} rounded size='mini' />
              }
              <Header.Content>
                <span style={{
                  width: '196px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'inline-block',
                  whiteSpace: 'nowrap'
                }}>{`${username}#${discriminator}`}</span>
                <Header.Subheader style={{ fontSize: '10px', color: 'grey' }}>{`Id: ${id}`}</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
        </Table.Row>
      )
    })
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
              <Table basic='very' celled selectable size='small'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell><h2>Guilds</h2></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {guilds}
                </Table.Body>
              </Table>
              <Table basic='very' celled selectable size='small'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell><h2>Channels</h2></Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {channels}
                </Table.Body>
              </Table>
            </Grid.Column>
            <Grid.Column width={12}>

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
    channels: state.mainPageReducer.get('channels')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setApiKey: apiKey => dispatch(loginFormActions.setApiKey(apiKey)),
    getCurrentUserGuilds: apiKey => dispatch(actions.getCurrentUserGuilds(apiKey)),
    getChannels: apiKey => dispatch(actions.getChannels(apiKey))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);