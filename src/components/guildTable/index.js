import React from 'react';
import { Table, Header, Image } from 'semantic-ui-react';

class GuildTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuildClick = this.handleGuildClick.bind(this);
  }
  handleGuildClick = (guild) => {
    let apiKey = localStorage.getItem('apiKey');
    this.props.searchGuildText(
      apiKey,
      guild.id,
      {
        author_id: this.props.me.id,
        include_nsfw: true,
        offset: this.props.commentsCount
      }
    )
  }
  render() {
    let { guilds } = this.props;
    guilds = guilds.map(guild => {
      return (
        <Table.Row key={guild.id} onClick={() => { this.handleGuildClick(guild) }}>
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
    return (
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
    )
  }
}

export default GuildTable;