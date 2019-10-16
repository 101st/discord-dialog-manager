import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as loginFormActions from '../../forms/login/actions';
import { Grid, Table } from 'semantic-ui-react';

import MainMenu from '../../menu/main';
import Stats from '../stats';

class MainPage extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount() {
    let apiKey = localStorage.getItem('apiKey');
    this.props.getCurrentUserGuilds(apiKey);
    this.props.setApiKey(apiKey);
  }

  render() {
    let { guilds, guildsCount } = this.props;
    guilds = guilds.map(guild => {
      console.log(guild);
      return (
        <Table.Row key={guild.id}>
          <Table.Cell>{guild.name}</Table.Cell>
        </Table.Row>
      )
    });
    return (
      <div>
        <MainMenu />
        <Grid style={{ margin: '10px' }}>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <Stats guildsCount={guildsCount} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Table basic='very' celled selectable size='small'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Guilds</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {guilds}
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
    guildsCount: state.mainPageReducer.get('guildsCount')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setApiKey: apiKey => dispatch(loginFormActions.setApiKey(apiKey)),
    getCurrentUserGuilds: apiKey => dispatch(actions.getCurrentUserGuilds(apiKey))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);