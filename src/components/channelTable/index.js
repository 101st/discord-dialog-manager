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
        offset: 0
      }
    )
  }
  render() {
    let { channels } = this.props;
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
    });
    return (
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
    )
  }
}

export default GuildTable;