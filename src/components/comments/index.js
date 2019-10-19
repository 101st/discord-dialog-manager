import React from 'react';
import { Comment, Header, Image } from 'semantic-ui-react';
import Utils from '../../utils';

function getImages(array) {
  return array.map(item => {
    return <Image key={item.id} src={item.url} />
  })
}

class GuildTable extends React.Component {
  render() {
    let { messages, total_results } = this.props.messages;
    messages = messages ? messages.flat(1) : [];
    messages = messages.map(message => {
      let { id, content, author, timestamp, attachments } = message;
      let { discriminator, username } = author;
      let date = Utils.getFormattedDate(new Date(timestamp));
      return (
        <Comment key={`${id}_${Utils.generateRandomString(3)}`}>
          <Comment.Avatar src={author.avatar ?
            `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png?size=128` :
            `https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png`
          } />
          <Comment.Content>
            <Comment.Author as='a'>{`${username}#${discriminator}`}</Comment.Author>
            <Comment.Metadata>
              <div>{date}</div>
            </Comment.Metadata>
            <Comment.Text>
              {content ? content : getImages(attachments)}
            </Comment.Text>
          </Comment.Content>
        </Comment>
      )
    });
    return (
      <Comment.Group>
        <Header as='h2'>Comments</Header>
        {messages}
      </Comment.Group>
    )
  }
}

export default GuildTable;